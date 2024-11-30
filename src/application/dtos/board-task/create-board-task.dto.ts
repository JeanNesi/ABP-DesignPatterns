import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator';

export class CreateBoardTaskDTO {
  @ApiProperty({ description: 'O id do quadro', example: '12345' })
  @IsString({ message: 'O id do quadro deve ser uma string.' })
  @IsNotEmpty({ message: 'O id do quadro é obrigatório.' })
  boardId: string;

  @ApiProperty({ description: 'O título da tarefa', example: 'Estudar TypeScript' })
  @IsString({ message: 'O título deve ser uma string.' })
  @IsNotEmpty({ message: 'O título é obrigatório.' })
  title: string;

  @ApiProperty({ description: 'A descrição da tarefa', required: false, example: 'Revisar os conceitos básicos de TypeScript' })
  @IsString({ message: 'A descrição deve ser uma string.' })
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'O tempo médio de estudo em minutos', example: 60 })
  @IsInt({ message: 'O tempo médio de estudo deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'O tempo médio de estudo é obrigatório.' })
  averageStudyTimeInMinutes: number;

  @ApiProperty({ description: 'A ordem da tarefa', example: 1 })
  @IsInt({ message: 'A ordem deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'A ordem é obrigatória.' })
  order: number;

  @ApiProperty({ description: 'A prioridade da tarefa', example: 'Alta' })
  @IsNotEmpty({ message: 'A prioridade é obrigatória.' })
  priority: string;
}
