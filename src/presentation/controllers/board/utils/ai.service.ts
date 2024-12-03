import { Injectable } from '@nestjs/common';
import { AIInterface } from './ai.interface';
import { ChatGptAdapter } from './chatGpt.adapter';

@Injectable()
export class AIService {
  private aiAdapter: AIInterface;

  constructor() {
    this.aiAdapter = new ChatGptAdapter();
  }

  async createResponse(
    title: string,
    dueDate: Date,
    studyTimeInMinutes: number,
  ) {
    return this.aiAdapter.generateResponse(title, dueDate, studyTimeInMinutes);
  }
}
