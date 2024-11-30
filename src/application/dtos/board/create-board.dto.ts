import {
  IsInt,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDTO {
  @ApiProperty({
    description: 'Título do quadro',
    example: 'Meu Quadro',
  })
  @IsString({
    message: 'O título deve ser uma string.',
  })
  @IsNotEmpty({ message: 'O título é obrigatório.' })
  title: string;

  @ApiProperty({
    description: 'Descrição do quadro',
    example: 'Descrição do meu quadro',
    required: false,
    nullable: true,
  })
  @IsString({
    message: 'A descrição deve ser uma string.',
  })
  @IsOptional()
  description?: string | null;

  @ApiProperty({
    description: 'ID do usuário',
    example: '12345',
  })
  @IsString({
    message: 'O id do usuário deve ser uma string.',
  })
  @IsNotEmpty({ message: 'O id do usuário é obrigatório.' })
  userId: string;

  @ApiProperty({
    description: 'Data de entrega',
    example: '2023-12-31T23:59:59Z',
  })
  @IsISO8601({}, { message: 'A data final deve possuir o formato ISO 8601.' })
  @IsNotEmpty({ message: 'A data de entrega é obrigatória.' })
  dueDate: Date;

  @ApiProperty({
    description: 'Tempo de estudo em minutos',
    example: 120,
  })
  @IsInt({
    message: 'O tempo de estudo deve ser um número inteiro.',
  })
  @IsNotEmpty({ message: 'O tempo de estudo é obrigatório.' })
  studyTimeInMinutes: number;
}
