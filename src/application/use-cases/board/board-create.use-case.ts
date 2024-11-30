//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { CreateBoardDTO, ResponseBoardDTO } from '../../../application/dtos/board';
import { IBoardRepository } from '../../../domain/board/board-repository.interface';

//#endregion

@Injectable()
export class CreateBoardUseCase {
  //#region INJECTS
  @Inject("IBoardRepository")
  private readonly boardRepository: IBoardRepository;
  //#endregion

  async execute(dto: CreateBoardDTO): Promise<ResponseBoardDTO> {
    return this.boardRepository.create(dto).then((board) => {
      return {
        id: board.id,
        dueDate: board.dueDate,
        title: board.title,
        studyTimeInMinutes: board.studyTimeInMinutes,
        userId: board.userId,
        description: board.description,
        createdAt: board.createdAt,
        updatedAt: board.updatedAt,
      };
    });
  }
}
