//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { ResponseBoardTaskDTO, UpdateBoardTaskDTO } from '../../../application/dtos/board-task';
import { IBoardTaskRepository } from '../../../domain/board-task/board-task-repository.interface';
import { BoardTaskMapper } from './map/board-task.mapper';
//#endregion

@Injectable()
export class UpdateBoardTaskUseCase {
    //#region INJECTS
    @Inject('IBoardTaskRepository')
    private readonly boardTaskRepository: IBoardTaskRepository;
    //#endregion

    async execute(id: string, data: UpdateBoardTaskDTO): Promise<ResponseBoardTaskDTO | null> {
        return BoardTaskMapper.toResponseBoardTaskDTO(await this.boardTaskRepository.update(id, data));
    }
}