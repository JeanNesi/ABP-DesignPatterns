import { Injectable } from '@nestjs/common';
import { IBoardRepository } from '../../../../domain/board/board-repository.interface';
import { BoardEntity } from '../../../../domain/board/board.entity';
import { prisma } from '../../../../infrastructure/database/prisma';

@Injectable()
export class BoardRepository implements IBoardRepository {

  private mapToEntity(board: any): BoardEntity {
    return new BoardEntity(
      board.id,
      board.title,
      board.userId,
      board.dueDate,
      board.studyTimeInMinutes,
      board.description
    );
  }

  async findAll(): Promise<BoardEntity[]> {
    const boards = await prisma.board.findMany();
    return boards.map(this.mapToEntity);
  }

  async findById(id: string): Promise<BoardEntity | null> {
    const board = await prisma.board.findUnique({ where: { id } });
    return board ? this.mapToEntity(board) : null;
  }

  async create(data: Partial<BoardEntity>): Promise<BoardEntity> {
    console.log(data);
    const newBoard = await prisma.board.create({
      data: {
        title: data.title,
        userId: data.userId,
        dueDate: data.dueDate,
        studyTimeInMinutes: data.studyTimeInMinutes,
        description: data.description,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return this.mapToEntity(newBoard);
  }

  async update(id: string, data: Partial<BoardEntity>): Promise<BoardEntity> {
    const updatedBoard = await prisma.board.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        dueDate: data.dueDate,
        studyTimeInMinutes: data.studyTimeInMinutes,
        updatedAt: new Date(),
      },
    });
    return this.mapToEntity(updatedBoard);
  }

  async delete(id: string): Promise<void> {
    await prisma.board.delete({ where: { id } });
  }
}
