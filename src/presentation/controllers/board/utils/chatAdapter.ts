export default interface ChatAdapter {
  generateResponse(
    title: string,
    dueDate: Date,
    studyTimeInMinutes: number,
  ): Promise<string>;
}
