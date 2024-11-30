import { Injectable } from '@nestjs/common';
import { IBoardTaskSubtaskRepository } from 'src/domain/board-task-subtask/board-task-subtask-repository.interface';
import { BoardTaskSubtaskEntity } from 'src/domain/board-task-subtask/board-task-subtask.entity';
import { prisma } from 'src/infrastructure/database/prisma';

@Injectable()
export class BoardTaskSubtaskRepository implements IBoardTaskSubtaskRepository {

    private mapToEntity(subtask: any): BoardTaskSubtaskEntity {
        return new BoardTaskSubtaskEntity(
            subtask.id,
            subtask.boardTaskId,
            subtask.title,
            subtask.description,
            subtask.isCompleted,
        );
    }

    async findAll(): Promise<BoardTaskSubtaskEntity[]> {
        const subtasks = await prisma.boardTaskSubtask.findMany();
        return subtasks.map(this.mapToEntity);
    }

    async findById(id: string): Promise<BoardTaskSubtaskEntity | null> {
        const subtask = await prisma.boardTaskSubtask.findUnique({ where: { id } });
        return subtask ? this.mapToEntity(subtask) : null;
    }

    async create(data: Partial<BoardTaskSubtaskEntity>): Promise<BoardTaskSubtaskEntity> {
        const newSubtask = await prisma.boardTaskSubtask.create({
            data: {
                boardTaskId: data.boardTaskId,
                title: data.title,
                description: data.description,
                isCompleted: data.isCompleted ?? false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        return this.mapToEntity(newSubtask);
    }

    async update(id: string, data: Partial<BoardTaskSubtaskEntity>): Promise<BoardTaskSubtaskEntity | null> {
        const updatedSubtask = await prisma.boardTaskSubtask.update({
            where: { id },
            data: {
                title: data.title,
                description: data.description,
                isCompleted: data.isCompleted,
                updatedAt: new Date(),
            },
        });
        return this.mapToEntity(updatedSubtask);
    }

    async delete(id: string): Promise<void> {
        await prisma.boardTaskSubtask.delete({ where: { id } });
    }

    async findByBoardTaskId(boardTaskId: string): Promise<BoardTaskSubtaskEntity[]> {
        const subtasks = await prisma.boardTaskSubtask.findMany({ where: { boardTaskId } });
        return subtasks.map(this.mapToEntity);
    }

    async updateCompletion(id: string, isCompleted: boolean): Promise<BoardTaskSubtaskEntity | null> {
        const updatedSubtask = await prisma.boardTaskSubtask.update({
            where: { id },
            data: {
                isCompleted,
                updatedAt: new Date(),
            },
        });
        return this.mapToEntity(updatedSubtask);
    }
}
