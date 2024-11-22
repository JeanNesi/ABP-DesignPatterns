import { ApiProperty } from '@nestjs/swagger';

export class ResponseBoardDTO {
  @ApiProperty({ example: 'board_abc123' })
  id: string;

  @ApiProperty({ example: 'My Study Plan' })
  title: string;

  @ApiProperty({ example: 'Detailed plan for studying for the upcoming finals', required: false })
  description?: string;

  @ApiProperty({ example: 'user_xyz789' })
  userId: string;

  @ApiProperty({ example: '2024-12-31T23:59:59.999Z' })
  dueDate: Date;

  @ApiProperty({ example: 180 })
  studyTimeInMinutes: number;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2024-01-02T00:00:00.000Z' })
  updatedAt: Date;
}
