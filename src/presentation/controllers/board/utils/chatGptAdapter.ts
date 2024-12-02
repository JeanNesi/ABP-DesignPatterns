import ChatAdapter from './ChatAdapter';
import { GPTService } from './services/GPTService';

export class ChatGptAdapter implements ChatAdapter {
  private gptService: GPTService;

  constructor() {
    this.gptService = new GPTService();
  }

  async generateResponse(
    title: string,
    dueDate: Date,
    studyTimeInMinutes: number,
  ): Promise<string> {
    // Chama o serviço GPT passando os parâmetros necessários
    return this.gptService.createResponse(title, dueDate, studyTimeInMinutes);
  }
}
