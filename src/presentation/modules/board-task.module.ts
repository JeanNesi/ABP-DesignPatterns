import { Module } from '@nestjs/common';
import { CountBoardTasksByBoardIdUseCase, CreateBoardTaskUseCase, DeleteBoardTaskUseCase, FindAllBoardTasksUseCase, FindBoardTaskByIdUseCase, FindBoardTasksByBoardIdUseCase, SearchBoardTasksByTitleOrDescriptionUseCase, UpdateBoardTaskPriorityUseCase, UpdateBoardTaskStatusUseCase, UpdateBoardTaskUseCase } from 'src/application/use-cases/board-task';
import { BoardTaskRepository } from 'src/infrastructure/database/prisma/repositories/board-task-repository';
import { BoardTaskController } from '../controllers/board-task';

@Module({
  controllers: [BoardTaskController],
  providers: [
    BoardTaskRepository,
    CountBoardTasksByBoardIdUseCase,
    CreateBoardTaskUseCase,
    DeleteBoardTaskUseCase,
    FindAllBoardTasksUseCase,
    FindBoardTaskByIdUseCase,
    FindBoardTasksByBoardIdUseCase,
    SearchBoardTasksByTitleOrDescriptionUseCase,
    UpdateBoardTaskPriorityUseCase,
    UpdateBoardTaskStatusUseCase,
    UpdateBoardTaskUseCase,
    {
      provide: 'IBoardTaskRepository',
      useClass: BoardTaskRepository
    }
  ],
})
export class BoardTaskModule { }