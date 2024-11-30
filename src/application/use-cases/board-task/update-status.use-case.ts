//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { UpdateStatusDTO } from 'src/application/dtos/board-task/update-status.dto';
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

    async execute(id: string, status: BoardStatusState): Promise<UpdateStatusDTO | null> {
        return BoardTaskMapper.toResponseBoardTaskDTO(await this.boardTaskRepository.updateStatus(id, status));
    }
}
