import { BoardStatusState, TodoStatus } from './states/board-status-state ';
import { BoardTaskPriorityState, LowPriority } from './states/board-task-priority-state ';

export class BoardTaskEntity {
  id: string;
  boardId: string;
  title: string;
  description: string;
  averageStudyTimeInMinutes: number;
  order: number;
  priority: BoardTaskPriorityState;
  status: BoardStatusState;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    boardId: string,
    title: string,
    description: string,
    averageStudyTimeInMinutes: number,
    order: number = 0,
    priority: BoardTaskPriorityState = new LowPriority(),
    status: BoardStatusState = new TodoStatus()
  ) {
    this.id = id;
    this.boardId = boardId;
    this.title = title;
    this.description = description;
    this.averageStudyTimeInMinutes = averageStudyTimeInMinutes;
    this.order = order;
    this.priority = priority;
    this.status = status;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  setPriority(priority: BoardTaskPriorityState): void {
    this.priority = priority;
    this.updatedAt = new Date();
  }

  setStatus(status: BoardStatusState): void {
    this.status = status;
    this.updatedAt = new Date();
  }

  getPriorityDescription(): string {
    return this.priority.getPriorityLevel();
  }

  getStatusDescription(): string {
    return this.status.getStatus();
  }
}
