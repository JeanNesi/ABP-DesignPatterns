//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { IBoardTaskRepository } from '../../../domain/board-task/board-task-repository.interface';
//#endregion

@Injectable()
export class DeleteBoardTaskUseCase {
    //#region INJECTS
    @Inject('IBoardTaskRepository')
    private readonly boardTaskRepository: IBoardTaskRepository;
    //#endregion

    async execute(id: string): Promise<void> {
        return this.boardTaskRepository.delete(id);
    }
}
