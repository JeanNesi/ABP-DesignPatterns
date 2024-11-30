//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { IBoardTaskSubtaskRepository } from '../../../domain/board-task-subtask/board-task-subtask-repository.interface';
//#endregion

@Injectable()
export class DeleteSubtaskUseCase {
    //#region INJECTS
    @Inject('IBoardTaskSubtaskRepository')
    private readonly boardTaskSubtaskRepository: IBoardTaskSubtaskRepository;
    //#endregion

    async execute(id: string): Promise<void> {
        return this.boardTaskSubtaskRepository.delete(id);
    }
}
