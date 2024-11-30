import {
  IsInt,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBoardDTO {
  @IsString({
    message: 'O título deve ser uma string.',
  })
  @IsNotEmpty({ message: 'O título é obrigatório.' })
  title: string;

  @IsString({
    message: 'A descrição deve ser uma string.',
  })
  @IsOptional()
  description?: string | null;

  @IsString({
    message: 'O id do usuário deve ser uma string.',
  })
  @IsNotEmpty({ message: 'O id do usuário é obrigatório.' })
  userId: string;

  @IsISO8601({}, { message: 'A data final deve possuir o formato ISO 8601.' })
  @IsNotEmpty({ message: 'A data de entrega é obrigatória.' })
  dueDate: Date;

  @IsInt({
    message: 'O tempo de estudo deve ser um número inteiro.',
  })
  @IsNotEmpty({ message: 'O tempo de estudo é obrigatório.' })
  studyTimeInMinutes: number;
}
