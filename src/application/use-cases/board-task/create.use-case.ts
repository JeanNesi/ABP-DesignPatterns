//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { CreateBoardTaskDTO, ResponseBoardTaskDTO } from 'src/application/dtos/board-task';
import { IBoardTaskRepository } from 'src/domain/board-task/board-task-repository.interface';
import { BoardStatusState } from 'src/domain/board-task/states/board-status-state ';
import { BoardTaskPriorityState } from 'src/domain/board-task/states/board-task-priority-state ';
import { BoardTaskMapper } from './map/board-task.mapper';
//#endregion

@Injectable()
export class CreateBoardTaskUseCase {
    //#region INJECTS
    @Inject('IBoardTaskRepository')
    private readonly boardTaskRepository: IBoardTaskRepository;
    //#endregion

    async execute(data: CreateBoardTaskDTO): Promise<ResponseBoardTaskDTO> {
        const entity = await this.boardTaskRepository.create({
            boardId: data.boardId,
            title: data.title,
            description: data.description,
            averageStudyTimeInMinutes: data.averageStudyTimeInMinutes,
            order: data.order,
            priority: data.priority as unknown as BoardTaskPriorityState,
            status: data.status as unknown as BoardStatusState,
        });

       return BoardTaskMapper.toResponseBoardTaskDTO(entity);
    }
}
