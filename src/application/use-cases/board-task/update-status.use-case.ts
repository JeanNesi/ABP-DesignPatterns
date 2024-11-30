//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { ResponseBoardTaskDTO } from '../../../application/dtos/board-task';
import { IBoardTaskRepository } from '../../../domain/board-task/board-task-repository.interface';
import { BoardStatusState } from '../../../domain/board-task/states/board-status-state ';
import { BoardTaskMapper } from './map/board-task.mapper';
//#endregion

@Injectable()
export class UpdateBoardTaskStatusUseCase {
    //#region INJECTS
    @Inject('IBoardTaskRepository')
    private readonly boardTaskRepository: IBoardTaskRepository;
    //#endregion

    async execute(id: string, status: BoardStatusState): Promise<ResponseBoardTaskDTO | null> {
        return BoardTaskMapper.toResponseBoardTaskDTO(await this.boardTaskRepository.updateStatus(id, status));
    }
}
