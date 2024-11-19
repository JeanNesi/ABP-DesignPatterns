import { Module } from '@nestjs/common';
import { BoardController } from '../controllers/board/board.controller';
import { CreateBoardUseCase } from 'src/application/use-cases/board/board-create.use-case';
import { BoardRepository } from 'src/infrastructure/database/prisma/repositories/board.repository';
import { Prisma } from 'src/infrastructure/database/prisma';

@Module({
  controllers: [BoardController],
  providers: [CreateBoardUseCase, BoardRepository, Prisma],
})
export class BoardModule {}
