//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { UpdatePriorityDTO } from 'src/application/dtos/board-task';
import { IBoardTaskRepository } from '../../../domain/board-task/board-task-repository.interface';
import { BoardTaskPriorityState } from '../../../domain/board-task/states/board-task-priority-state ';
import { BoardTaskMapper } from './map/board-task.mapper';
//#endregion

@Injectable()
export class UpdateBoardTaskPriorityUseCase {
    //#region INJECTS
    @Inject('IBoardTaskRepository')
    private readonly boardTaskRepository: IBoardTaskRepository;
    //#endregion

    async execute(id: string, priority: BoardTaskPriorityState): Promise<UpdatePriorityDTO | null> {
        return BoardTaskMapper.toResponseBoardTaskDTO(await this.boardTaskRepository.updatePriority(id, priority));
    }
}
