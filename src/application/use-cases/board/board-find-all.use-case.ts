import { Inject, Injectable } from '@nestjs/common';
import { ResponseBoardDTO } from 'src/application/dtos/board';
import { BoardRepository } from 'src/infrastructure/database/prisma/repositories/board.repository';

//#region IMPORTS
//#endregion

@Injectable()
export class FindAllBoardsUseCase {
    //#region INJECTS
    @Inject(BoardRepository)
    private readonly boardRepository: BoardRepository;
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