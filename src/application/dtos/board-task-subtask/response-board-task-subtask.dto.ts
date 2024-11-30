import { ApiProperty } from '@nestjs/swagger';

export class ResponseBoardTaskSubTaskDTO {
  @ApiProperty({ example: 'board_abc123' })
  id: string;

  @ApiProperty({ example: 'task_abc123' })
  boardTaskId: string;

  @ApiProperty({ example: 'My Study Plan' })
  title: string;

  @ApiProperty({ example: 'Detailed plan for studying for the upcoming finals', required: false })
  description?: string;

  @ApiProperty({ example: false })
  isCompleted: boolean;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2024-01-02T00:00:00.000Z' })
  updatedAt: Date;
}
