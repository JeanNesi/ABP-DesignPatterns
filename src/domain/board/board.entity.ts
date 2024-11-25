export class BoardEntity {
  id: string;
  title: string;
  description?: string;
  userId: string;
  dueDate: Date;
  studyTimeInMinutes: number;
  createdAt: Date;
  updatedAt: Date;
}
