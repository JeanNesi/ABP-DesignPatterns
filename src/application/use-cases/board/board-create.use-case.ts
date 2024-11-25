//#region IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { CreateBoardDTO, ResponseBoardDTO } from 'src/application/dtos/board';
import { BoardRepository } from 'src/infrastructure/database/prisma/repositories/board.repository';
//#endregion

@Injectable()
export class CreateBoardUseCase {
  //#region INJECTS
  @Inject(BoardRepository)
  private readonly boardRepository: BoardRepository;
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
