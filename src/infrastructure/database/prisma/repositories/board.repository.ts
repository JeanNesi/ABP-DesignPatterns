import { Injectable } from '@nestjs/common';
import { BoardEntity } from 'src/domain/board/board.entity';
import { Prisma } from '..';

@Injectable()
export class BoardRepository {
  constructor(private readonly prisma: Prisma) { }

  async create(data: Partial<BoardEntity>): Promise<BoardEntity> {
    return this.prisma.board.create({
      data: {
        dueDate: data.dueDate,
        title: data.title,
        studyTimeInMinutes: data.studyTimeInMinutes,
        description: data.description,
        userId: data.userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async findAll(): Promise<BoardEntity[]> {
    return this.prisma.board.findMany();
  }

  async findById(id: string): Promise<BoardEntity | null> {
    return this.prisma.board.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<BoardEntity>): Promise<BoardEntity> {
    return this.prisma.board.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.board.delete({ where: { id } });
  }
}
