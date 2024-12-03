import { generateBoardTaskMock } from '../../../../utilities/mock/generateBoardTaskMock';
import { IAIReponse } from './ai.interface';

export class GeminiService {
  async createResponse(
    description: string,
    dueDate: Date,
    studyTimeInMinutes: number,
  ): Promise<IAIReponse[]> {
    const response = await generateBoardTaskMock({
      aiName: 'Gemini',
      returnType: 'string',
      data: {
        description,
        dueDate,
        studyTimeInMinutes,
      },
    });

    return JSON.parse(response);
  }
}
