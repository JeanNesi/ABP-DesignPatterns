import { Module } from '@nestjs/common';
import {
  CreateSubtaskUseCase,
  DeleteSubtaskUseCase,
  FindAllSubtasksUseCase,
  FindSubtaskByIdUseCase,
  UpdateSubtaskCompletionUseCase,
  UpdateSubtaskUseCase
} from '../../application/use-cases/board-task-subtask';
import { BoardTaskSubtaskRepository } from '../../infrastructure/database/prisma/repositories/board-task-subtask-repository';
import { BoardTaskSubtaskController } from '../controllers/board-task-subtask';

@Module({
  controllers: [BoardTaskSubtaskController],
  providers: [
    BoardTaskSubtaskRepository,
    CreateSubtaskUseCase,
    DeleteSubtaskUseCase,
    FindAllSubtasksUseCase,
    FindSubtaskByIdUseCase,
    UpdateSubtaskCompletionUseCase,
    UpdateSubtaskUseCase,
    {
      provide: 'IBoardTaskSubtaskRepository',
      useClass: BoardTaskSubtaskRepository
    }
  ],
})
export class BoardTaskSubtaskModule { }
