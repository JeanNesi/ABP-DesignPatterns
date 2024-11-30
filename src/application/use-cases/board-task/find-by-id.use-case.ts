//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { ResponseBoardTaskDTO } from '../../../application/dtos/board-task';
import { IBoardTaskRepository } from '../../../domain/board-task/board-task-repository.interface';
import { BoardTaskMapper } from './map/board-task.mapper';
//#endregion

@Injectable()
export class FindBoardTaskByIdUseCase {
    //#region INJECTS
    @Inject('IBoardTaskRepository')
    private readonly boardTaskRepository: IBoardTaskRepository;
    //#endregion

    async execute(id: string): Promise<ResponseBoardTaskDTO | null> {
        const entity = await this.boardTaskRepository.findById(id);

        if (!entity) {
            return null;
        }

        return BoardTaskMapper.toResponseBoardTaskDTO(entity);
    }
}
