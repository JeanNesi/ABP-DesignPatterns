import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ResponseBoardDTO } from 'src/application/dtos/board';
import { BoardRepository } from 'src/infrastructure/database/prisma/repositories/board.repository';

@Injectable()
export class FindBoardByIdUseCase {
    @Inject(BoardRepository)
    private readonly boardRepository: BoardRepository;

    async execute(id: string): Promise<ResponseBoardDTO> {
        const board = await this.boardRepository.findById(id);
        if (!board) {
            throw new NotFoundException(`Board with id ${id} not found`);
        }
        return {
            id: board.id,
            dueDate: board.dueDate,
            title: board.title,
            studyTimeInMinutes: board.studyTimeInMinutes,
            userId: board.userId,
            description: board.description,
            createdAt: board.createdAt,
            updatedAt: board.updatedAt,
        };
    }
}