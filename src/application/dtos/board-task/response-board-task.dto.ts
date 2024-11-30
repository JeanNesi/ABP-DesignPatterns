import { ApiProperty } from '@nestjs/swagger';

export class ResponseBoardTaskDTO {
  @ApiProperty({ example: 'board_abc123' })
  id: string;

  @ApiProperty({ example: 'board_abc123' })
  boardId: string;

  @ApiProperty({ example: 'My Study Plan' })
  title: string;

  @ApiProperty({ example: 'Detailed plan for studying for the upcoming finals', required: false })
  description?: string;

  @ApiProperty({ example: 180 })
  averageStudyTimeInMinutes: number;

  @ApiProperty({ example: 1 })
  order: number;

  @ApiProperty({ example: 'Low' })
  priority: string;

  @ApiProperty({ example: 'Todo' })
  status: string;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2024-01-02T00:00:00.000Z' })
  updatedAt: Date;
}
