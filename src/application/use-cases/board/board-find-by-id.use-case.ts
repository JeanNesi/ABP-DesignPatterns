import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ResponseBoardDTO } from '../../../application/dtos/board';
import { IBoardRepository } from '../../../domain/board/board-repository.interface';

@Injectable()
export class FindBoardByIdUseCase {
    @Inject("IBoardRepository")
    private readonly boardRepository: IBoardRepository;

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