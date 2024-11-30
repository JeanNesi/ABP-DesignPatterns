import { BoardTaskEntity } from '../board-task/board-task.entity';

export class BoardEntity {
  id: string;
  title: string;
  description?: string;
  userId: string;
  dueDate: Date;
  studyTimeInMinutes: number;
  createdAt: Date;
  updatedAt: Date;
  tasks: BoardTaskEntity[] | null;

  constructor(
    id: string,
    title: string,
    userId: string,
    dueDate: Date,
    studyTimeInMinutes: number,
    description?: string
  ) {
    this.id = id;
    this.title = title;
    this.userId = userId;
    this.dueDate = dueDate;
    this.studyTimeInMinutes = studyTimeInMinutes;
    this.description = description;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.tasks = [];
  }

  public addTask(task: BoardTaskEntity): void {
    if (!this.isValidTask(task)) {
      throw new Error('Invalid task');
    }
    this.tasks.push(task);
    this.updateTimestamp();
  }

  public removeTask(taskId: string): void {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.updateTimestamp();
    }
  }

  private isValidTask(task: BoardTaskEntity): boolean {
    return !!task.id && !!task.title;
  }

  private updateTimestamp(): void {
    this.updatedAt = new Date();
  }
}
