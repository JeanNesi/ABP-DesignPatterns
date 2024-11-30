//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { CreateBoardTaskSubTaskDTO, ResponseBoardTaskSubTaskDTO } from '../../../application/dtos/board-task-subtask';
import { IBoardTaskSubtaskRepository } from '../../../domain/board-task-subtask/board-task-subtask-repository.interface';
import { BoardTaskSubtaskMapper } from './map/board-task-subtask.mapper';
//#endregion

@Injectable()
export class CreateSubtaskUseCase {
  //#region INJECTS
  @Inject('IBoardTaskSubtaskRepository')
  private readonly boardTaskSubtaskRepository: IBoardTaskSubtaskRepository;
  //#endregion

  async execute(data: CreateBoardTaskSubTaskDTO): Promise<ResponseBoardTaskSubTaskDTO> {
    return BoardTaskSubtaskMapper.toResponseBoardTaskSubTaskDTO(await this.boardTaskSubtaskRepository.create(data));
  }
}
