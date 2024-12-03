export type IAIReponse = {
  title: string;
  description: string;
  averageStudyTimeInMinutes: number;
  order: number;
  priority: string;
  status: string;
};

export interface AIInterface {
  generateResponse(
    title: string,
    dueDate: Date,
    studyTimeInMinutes: number,
  ): Promise<IAIReponse[]>;
}
