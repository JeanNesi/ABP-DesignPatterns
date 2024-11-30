import { Injectable } from '@nestjs/common';
import { BoardStatus, BoardTaskPriority } from '@prisma/client';
import { IBoardTaskRepository } from '../../../../domain/board-task/board-task-repository.interface';
import { BoardTaskEntity } from '../../../../domain/board-task/board-task.entity';
import { BoardStatusState, BoardTaskPriorityState, DoneStatus, HighPriority, InProgressStatus, LowPriority, MediumPriority, TodoStatus } from '../../../../domain/board-task/states/';
import { prisma } from '../../../../infrastructure/database/prisma';

@Injectable()
export class BoardTaskRepository implements IBoardTaskRepository {

    private mapToEntity(task: any): BoardTaskEntity {
        const status = this.mapToStatusState(task.status);
        const priority = this.mapToPriorityState(task.priority);
        return new BoardTaskEntity(
            task.id,
            task.boardId,
            task.title,
            task.description,
            task.averageStudyTimeInMinutes,
            task.order,
            priority,
            status,
        );
    }

    private mapToStatusState(status: BoardStatus): BoardStatusState {
        switch (status) {
            case 'doing':
                return new InProgressStatus();
            case 'done':
                return new DoneStatus();
            default:
                return new TodoStatus();
        }
    }

    private mapToPriorityState(priority: BoardTaskPriority): BoardTaskPriorityState {
        switch (priority) {
            case 'medium':
                return new MediumPriority();
            case 'high':
                return new HighPriority();
            default:
                return new LowPriority();
        }
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
                priority: data.priority.getPriorityLevel() as BoardTaskPriority,
                status: data.status.getStatus() as BoardStatus,
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
                priority: data.priority.getPriorityLevel() as BoardTaskPriority,
                status: data.status.getStatus() as BoardStatus,
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