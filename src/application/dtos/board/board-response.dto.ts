import { ApiProperty } from '@nestjs/swagger';

export class BoardResponseDTO {
  @ApiProperty({ example: 'board_123' })
  id: string;

  @ApiProperty({ example: 'Study Plan' })
  title: string;

  @ApiProperty({ example: 'Plan for studying for finals', required: false })
  description?: string;

  @ApiProperty({ example: 'user_123' })
  userId: string;

  @ApiProperty({ example: '2024-12-31T23:59:59.999Z' })
  dueDate: Date;

  @ApiProperty({ example: 120 })
  studyTimeInMinutes: number;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  updatedAt: Date;
}
