import { faker } from '@faker-js/faker';
import { $Enums } from '@prisma/client';

interface IGenerateBoardTaskMock {
  aiName: string;
  returnType: 'string' | 'object';
  data: {
    dueDate: Date;
    description: string;
    studyTimeInMinutes: number;
  };
}

const priorities = [
  $Enums.BoardTaskPriority.low,
  $Enums.BoardTaskPriority.medium,
  $Enums.BoardTaskPriority.high,
];

export const generateBoardTaskMock = async ({
  aiName,
  returnType,
}: IGenerateBoardTaskMock) => {
  const mock = Array.from({ length: 3 }).map((_, index) => ({
    title: `${aiName} - ${faker.lorem.slug()}`,
    description: faker.lorem.paragraph(),
    averageStudyTimeInMinutes: faker.number.int({ min: 10, max: 100 }),
    order: index + 1,
    priority: priorities[faker.number.int({ min: 0, max: 2 })],
    status: 'todo',
  }));

  const getResponse = (): Promise<string> => {
    const data = JSON.stringify(mock);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

  const response = await getResponse();

  return returnType === 'object' ? JSON.parse(response) : response;
};
