export class GeminiService {
  async createResponse(
    title: string,
    dueDate: Date,
    studyTimeInMinutes: number,
  ): Promise<string> {
    // Lógica para gerar a resposta usando a API do Gemini
    // Chamar a API do Gemini com os parâmetros fornecidos
    return `Response from Gemini for ${title} with a due date of ${dueDate} and study time of ${studyTimeInMinutes} minutes.`;
  }
}
