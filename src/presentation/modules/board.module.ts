import { Module } from '@nestjs/common';
import { CreateBoardUseCase, DeleteBoardUseCase, FindAllBoardsUseCase, FindBoardByIdUseCase, UpdateBoardUseCase } from '../../application/use-cases/board';
import { BoardRepository } from '../../infrastructure/database/prisma/repositories/board.repository';
import { BoardController } from '../controllers/board/';

@Module({
  controllers: [BoardController],
  providers: [
    CreateBoardUseCase,
    UpdateBoardUseCase,
    FindAllBoardsUseCase,
    DeleteBoardUseCase,
    FindBoardByIdUseCase,
    BoardRepository,
    {
      provide: 'IBoardRepository',
      useClass: BoardRepository
    }
  ],
})
export class BoardModule { }
