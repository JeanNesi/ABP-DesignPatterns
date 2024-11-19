export class BoardTaskSubtaskEntity {
  id: string;
  boardTaskId: string;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
