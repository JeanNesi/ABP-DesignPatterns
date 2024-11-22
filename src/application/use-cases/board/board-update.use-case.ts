import { Inject, Injectable } from '@nestjs/common';
import { ResponseBoardDTO, UpdateBoardDTO } from 'src/application/dtos/board';
import { BoardRepository } from 'src/infrastructure/database/prisma/repositories/board.repository';

@Injectable()
export class UpdateBoardUseCase {

    @Inject(BoardRepository)
    private readonly boardRepository: BoardRepository;

    async execute(boardId: string, dto: UpdateBoardDTO): Promise<ResponseBoardDTO> {
        return this.boardRepository.update(boardId, dto).then((board) => {
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
        });
    }
}