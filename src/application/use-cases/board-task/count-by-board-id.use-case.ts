//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { IBoardTaskRepository } from '../../../domain/board-task/board-task-repository.interface';
//#endregion

@Injectable()
export class CountBoardTasksByBoardIdUseCase {
    //#region INJECTS
    @Inject('IBoardTaskRepository')
    private readonly boardTaskRepository: IBoardTaskRepository;
    //#endregion

    async execute(boardId: string): Promise<number> {
        return this.boardTaskRepository.countByBoardId(boardId);
    }
}
