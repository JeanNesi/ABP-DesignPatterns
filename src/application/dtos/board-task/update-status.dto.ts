import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateStatusDTO {
  @ApiProperty({
    description: 'O status da tarefa',
    example: 'todo, doing, done',
  })
  @IsNotEmpty({ message: 'O status é obrigatório.' })
  status: string;
}
