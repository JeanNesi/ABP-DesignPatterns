//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { ResponseBoardTaskDTO } from 'src/application/dtos/board-task';
import { IBoardTaskRepository } from 'src/domain/board-task/board-task-repository.interface';
import { BoardTaskMapper } from './map/board-task.mapper';
//#endregion

@Injectable()
export class FindBoardTasksByBoardIdUseCase {
    //#region INJECTS
    @Inject('IBoardTaskRepository')
    private readonly boardTaskRepository: IBoardTaskRepository;
    //#endregion

    async execute(boardId: string): Promise<ResponseBoardTaskDTO[]> {
        return BoardTaskMapper.toResponseBoardTaskDTOList(await this.boardTaskRepository.findByBoardId(boardId));
    }
}
