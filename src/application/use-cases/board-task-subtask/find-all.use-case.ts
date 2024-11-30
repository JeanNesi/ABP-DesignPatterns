//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { ResponseBoardTaskSubTaskDTO } from '../../../application/dtos/board-task-subtask';
import { IBoardTaskSubtaskRepository } from '../../../domain/board-task-subtask/board-task-subtask-repository.interface';
import { BoardTaskSubtaskMapper } from './map/board-task-subtask.mapper';
//#endregion

@Injectable()
export class FindAllSubtasksUseCase {
  //#region INJECTS
  @Inject('IBoardTaskSubtaskRepository')
  private readonly boardTaskSubtaskRepository: IBoardTaskSubtaskRepository;
  //#endregion

  async execute(): Promise<ResponseBoardTaskSubTaskDTO[]> {
    return BoardTaskSubtaskMapper.toResponseBoardTaskSubTaskDTOList(await this.boardTaskSubtaskRepository.findAll());
  }
}
