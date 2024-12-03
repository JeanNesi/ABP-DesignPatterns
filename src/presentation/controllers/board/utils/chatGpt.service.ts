import { generateBoardTaskMock } from '../../../../utilities/mock/generateBoardTaskMock';
import { IAIReponse } from './ai.interface';

export class ChatGPTService {
  async createResponse(
    description: string,
    dueDate: Date,
    studyTimeInMinutes: number,
  ): Promise<IAIReponse[]> {
    const response = await generateBoardTaskMock({
      aiName: 'Chat GPT',
      returnType: 'object',
      data: {
        description,
        dueDate,
        studyTimeInMinutes,
      },
    });

    return response;
  }
}
