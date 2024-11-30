import { Injectable } from '@nestjs/common';
import { BoardStatus, BoardTaskPriority } from '@prisma/client';
import { IBoardTaskRepository } from '../../../../domain/board-task/board-task-repository.interface';
import { BoardTaskEntity } from '../../../../domain/board-task/board-task.entity';
import { BoardStatusState } from '../../../../domain/board-task/states/board-status-state ';
import { BoardTaskPriorityState } from '../../../../domain/board-task/states/board-task-priority-state ';
import { prisma } from '../../../../infrastructure/database/prisma';

@Injectable()
export class BoardTaskRepository implements IBoardTaskRepository {

    private mapToEntity(task: any): BoardTaskEntity {
        return new BoardTaskEntity(
            task.id,
            task.boardId,
            task.title,
            task.description,
            task.averageStudyTimeInMinutes,
            task.order,
            task.priority,
            task.status,
        );
    }

    async findAll(): Promise<BoardTaskEntity[]> {
        const tasks = await prisma.boardTask.findMany();
        return tasks.map(this.mapToEntity);
    }

    async findById(id: string): Promise<BoardTaskEntity | null> {
        const task = await prisma.boardTask.findUnique({ where: { id } });
        return task ? this.mapToEntity(task) : null;
    }

    async create(data: Partial<BoardTaskEntity>): Promise<BoardTaskEntity> {
        const newTask = await prisma.boardTask.create({
            data: {
                boardId: data.boardId,
                title: data.title,
                description: data.description,
                averageStudyTimeInMinutes: data.averageStudyTimeInMinutes,
                order: data.order ?? 0,
                priority: data.priority as unknown as BoardTaskPriority,
                status: data.status as unknown as BoardStatus,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        return this.mapToEntity(newTask);
    }

    async update(id: string, data: Partial<BoardTaskEntity>): Promise<BoardTaskEntity> {
        const updatedTask = await prisma.boardTask.update({
            where: { id },
            data: {
                title: data.title,
                description: data.description,
                averageStudyTimeInMinutes: data.averageStudyTimeInMinutes,
                order: data.order,
                priority: data.priority as unknown as BoardTaskPriority,
                status: data.status as unknown as BoardStatus,
                updatedAt: new Date(),
            },
        });
        return this.mapToEntity(updatedTask);
    }

    async delete(id: string): Promise<void> {
        await prisma.boardTask.delete({ where: { id } });
    }

    async findByBoardId(boardId: string): Promise<BoardTaskEntity[]> {
        const tasks = await prisma.boardTask.findMany({ where: { boardId } });
        return tasks.map(this.mapToEntity);
    }

    async updateStatus(id: string, status: BoardStatusState): Promise<BoardTaskEntity | null> {
        const updatedTask = await prisma.boardTask.update({
            where: { id },
            data: {
                status: status.getStatus() as BoardStatus,
                updatedAt: new Date(),
            },
        });
        return updatedTask ? this.mapToEntity(updatedTask) : null;
    }

    async updatePriority(id: string, priority: BoardTaskPriorityState): Promise<BoardTaskEntity | null> {
        const updatedTask = await prisma.boardTask.update({
            where: { id },
            data: {
                priority: priority.getPriorityLevel() as BoardTaskPriority,
                updatedAt: new Date(),
            },
        });
        return updatedTask ? this.mapToEntity(updatedTask) : null;
    }

    async countByBoardId(boardId: string): Promise<number> {
        return await prisma.boardTask.count({ where: { boardId } });
    }

    async searchByTitleOrDescription(keyword: string): Promise<BoardTaskEntity[]> {
        const tasks = await prisma.boardTask.findMany({
            where: {
                OR: [
                    { title: { contains: keyword, mode: 'insensitive' } },
                    { description: { contains: keyword, mode: 'insensitive' } },
                ],
            },
        });
        return tasks.map(this.mapToEntity);
    }
}
