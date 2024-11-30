//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { ResponseBoardTaskSubTaskDTO } from 'src/application/dtos/board-task-subtask';
import { IBoardTaskSubtaskRepository } from 'src/domain/board-task-subtask/board-task-subtask-repository.interface';
import { BoardTaskSubtaskEntity } from 'src/domain/board-task-subtask/board-task-subtask.entity';
import { BoardTaskSubtaskMapper } from './map/board-task-subtask.mapper';
//#endregion

@Injectable()
export class UpdateSubtaskUseCase {
    //#region INJECTS
    @Inject('IBoardTaskSubtaskRepository')
    private readonly boardTaskSubtaskRepository: IBoardTaskSubtaskRepository;
    //#endregion

    async execute(id: string, data: Partial<BoardTaskSubtaskEntity>): Promise<ResponseBoardTaskSubTaskDTO | null> {
        return BoardTaskSubtaskMapper.toResponseBoardTaskSubTaskDTO(await this.boardTaskSubtaskRepository.update(id, data));
    }
}
