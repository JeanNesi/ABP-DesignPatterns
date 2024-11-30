export class BoardTaskSubtaskEntity {
  id: string;
  boardTaskId: string;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    boardTaskId: string,
    title: string,
    description: string,
    isCompleted: boolean = false
  ) {
    this.id = id;
    this.boardTaskId = boardTaskId;
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  toggleCompletion(): void {
    this.isCompleted = !this.isCompleted;
    this.updatedAt = new Date();
  }
}
