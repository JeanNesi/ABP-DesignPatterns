import { Module } from '@nestjs/common';
import {
  CreateBoardUseCase,
  DeleteBoardUseCase,
  FindAllBoardsUseCase,
  FindBoardByIdUseCase,
  UpdateBoardUseCase,
} from '../../application/use-cases/board';
import { BoardRepository } from '../../infrastructure/database/prisma/repositories/board.repository';
import { BoardController } from '../controllers/board/';
import { AIService } from '../controllers/board/utils/ai.service';
import { ChatGptAdapter } from '../controllers/board/utils/chatGpt.adapter';
import { GeminiAdapter } from '../controllers/board/utils/gemini.adapter';
import { BoardTaskModule } from './board-task.module';

@Module({
  imports: [BoardTaskModule],
  controllers: [BoardController],
  providers: [
    CreateBoardUseCase,
    UpdateBoardUseCase,
    FindAllBoardsUseCase,
    DeleteBoardUseCase,
    FindBoardByIdUseCase,
    BoardRepository,
    AIService,
    ChatGptAdapter,
    GeminiAdapter,
    {
      provide: 'IBoardRepository',
      useClass: BoardRepository,
    },
  ],
})
export class BoardModule {}
