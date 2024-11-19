import { BoardTaskPriority, BoardStatus } from '@prisma/client';

export class BoardTaskEntity {
  id: string;
  boardId: string;
  title: string;
  description: string;
  averageStudyTimeInMinutes: number;
  order: number;
  priority: BoardTaskPriority;
  status: BoardStatus;
  createdAt: Date;
  updatedAt: Date;
}
