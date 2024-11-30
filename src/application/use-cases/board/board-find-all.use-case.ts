import { Inject, Injectable } from '@nestjs/common';
import { ResponseBoardDTO } from 'src/application/dtos/board';
import { IBoardRepository } from 'src/domain/board/board-repository.interface';

//#region IMPORTS
//#endregion

@Injectable()
export class FindAllBoardsUseCase {
    //#region INJECTS
    @Inject("IBoardRepository")
    private readonly boardRepository: IBoardRepository;
    //#endregion

    async execute(): Promise<ResponseBoardDTO[]> {
        const boards = await this.boardRepository.findAll();
        return boards.map(board => ({
            id: board.id,
            dueDate: board.dueDate,
            title: board.title,
            studyTimeInMinutes: board.studyTimeInMinutes,
            userId: board.userId,
            description: board.description,
            createdAt: board.createdAt,
            updatedAt: board.updatedAt,
        }));
    }
}