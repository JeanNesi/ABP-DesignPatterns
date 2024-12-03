import { ChatGPTService } from './chatGpt.service';
import { AIInterface } from './ai.interface';

export class ChatGptAdapter implements AIInterface {
  private ChatGPTService: ChatGPTService;

  constructor() {
    this.ChatGPTService = new ChatGPTService();
  }

  async generateResponse(
    title: string,
    dueDate: Date,
    studyTimeInMinutes: number,
  ) {
    return this.ChatGPTService.createResponse(
      title,
      dueDate,
      studyTimeInMinutes,
    );
  }
}
