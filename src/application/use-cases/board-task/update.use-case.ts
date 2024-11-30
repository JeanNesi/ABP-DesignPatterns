//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { ResponseBoardTaskDTO, UpdateBoardTaskDTO } from 'src/application/dtos/board-task';
import { IBoardTaskRepository } from 'src/domain/board-task/board-task-repository.interface';
import { BoardStatusState } from 'src/domain/board-task/states/board-status-state ';
import { BoardTaskPriorityState } from 'src/domain/board-task/states/board-task-priority-state ';
import { BoardTaskMapper } from './map/board-task.mapper';
//#endregion

@Injectable()
export class UpdateBoardTaskUseCase {
    //#region INJECTS
    @Inject('IBoardTaskRepository')
    private readonly boardTaskRepository: IBoardTaskRepository;
    //#endregion

    async execute(id: string, data: UpdateBoardTaskDTO): Promise<ResponseBoardTaskDTO | null> {
        return BoardTaskMapper.toResponseBoardTaskDTO(await this.boardTaskRepository.update(id, {
            ...data,
            priority: data.priority as unknown as BoardTaskPriorityState,
            status: data.status as unknown as BoardStatusState,
        }));
    }
}