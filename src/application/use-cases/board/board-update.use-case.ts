import { Inject, Injectable } from '@nestjs/common';
import { ResponseBoardDTO, UpdateBoardDTO } from 'src/application/dtos/board';
import { IBoardRepository } from 'src/domain/board/board-repository.interface';

@Injectable()
export class UpdateBoardUseCase {

    @Inject("IBoardRepository")
    private readonly boardRepository: IBoardRepository;

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