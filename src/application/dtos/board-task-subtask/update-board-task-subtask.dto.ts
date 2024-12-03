import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateBoardTaskSubTaskDTO {
    @ApiProperty({ description: 'O id deve ser uma string.' })
    @IsString({ message: 'O id deve ser uma string.' })
    @IsNotEmpty({ message: 'O id é obrigatório.' })
    id: string;

    @ApiProperty({ description: 'O id da tarefa do quadro deve ser uma string.' })
    @IsString({ message: 'O id da tarefa do quadro deve ser uma string.' })
    @IsNotEmpty({ message: 'O id da tarefa do quadro é obrigatório.' })
    boardTaskId: string;

    @ApiProperty({ description: 'O título deve ser uma string.' })
    @IsString({ message: 'O título deve ser uma string.' })
    @IsNotEmpty({ message: 'O título é obrigatório.' })
    title: string;

    @ApiProperty({ description: 'A descrição deve ser uma string.', required: false, nullable: true })
    @IsString({ message: 'A descrição deve ser uma string.' })
    @IsOptional()
    description?: string | null;

    @ApiProperty({ description: 'O campo de conclusão deve ser um booleano.' })
    @IsBoolean({ message: 'O campo de conclusão deve ser um booleano.' })
    @IsNotEmpty({ message: 'O campo de conclusão é obrigatório.' })
    isCompleted: boolean;

    @ApiProperty({ description: 'A data de criação deve ser uma data válida.' })
    @IsDate({ message: 'A data de criação deve ser uma data válida.' })
    @IsNotEmpty({ message: 'A data de criação é obrigatória.' })
    createdAt: Date;

    @ApiProperty({ description: 'A data de atualização deve ser uma data válida.' })
    @IsDate({ message: 'A data de atualização deve ser uma data válida.' })
    @IsNotEmpty({ message: 'A data de atualização é obrigatória.' })
    updatedAt: Date;
}
