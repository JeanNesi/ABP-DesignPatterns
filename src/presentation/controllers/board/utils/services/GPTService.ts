export class GPTService {
  async createResponse(
    title: string,
    dueDate: Date,
    studyTimeInMinutes: number,
  ): Promise<string> {
    // Lógica para gerar a resposta usando a API do GPT
    // Chamar a API do GPT com os parâmetros fornecidos

    return `Response from GPT for ${title} with a due date of ${dueDate} and study time of ${studyTimeInMinutes} minutes.`;
  }
}
