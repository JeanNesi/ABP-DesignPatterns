import ChatAdapter from './ChatAdapter';
import { GeminiService } from './services/GeminiService';

export class GeminiAdapter implements ChatAdapter {
  private geminiService: GeminiService;

  constructor() {
    this.geminiService = new GeminiService();
  }

  async generateResponse(
    title: string,
    dueDate: Date,
    studyTimeInMinutes: number,
  ): Promise<string> {
    // Chama o serviço Gemini passando os parâmetros necessários
    return this.geminiService.createResponse(
      title,
      dueDate,
      studyTimeInMinutes,
    );
  }
}
