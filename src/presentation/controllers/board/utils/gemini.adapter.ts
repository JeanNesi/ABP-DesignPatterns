import { GeminiService } from './gemini.service';
import { AIInterface } from './ai.interface';

export class GeminiAdapter implements AIInterface {
  private geminiService: GeminiService;

  constructor() {
    this.geminiService = new GeminiService();
  }

  async generateResponse(
    description: string,
    dueDate: Date,
    studyTimeInMinutes: number,
  ) {
    return this.geminiService.createResponse(
      description,
      dueDate,
      studyTimeInMinutes,
    );
  }
}
