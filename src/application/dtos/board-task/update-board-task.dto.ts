import { ApiProperty } from '@nestjs/swagger';
import {
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString
} from 'class-validator';

export class UpdateBoardTaskDTO {
    @ApiProperty({ description: 'O id do quadro', example: '12345' })
    @IsString({ message: 'O id do quadro deve ser uma string.' })
    @IsNotEmpty({ message: 'O id do quadro é obrigatório.' })
    boardId: string;

    @ApiProperty({ description: 'O título da tarefa', example: 'Estudar TypeScript' })
    @IsString({ message: 'O título deve ser uma string.' })
    @IsNotEmpty({ message: 'O título é obrigatório.' })
    title: string;

    @ApiProperty({ description: 'A descrição da tarefa', example: 'Estudar os conceitos básicos de TypeScript', required: false, nullable: true })
    @IsString({ message: 'A descrição deve ser uma string.' })
    @IsOptional()
    description?: string | null;

    @ApiProperty({ description: 'O tempo médio de estudo em minutos', example: 60 })
    @IsInt({ message: 'O tempo médio de estudo deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'O tempo médio de estudo é obrigatório.' })
    averageStudyTimeInMinutes: number;

    @ApiProperty({ description: 'A ordem da tarefa', example: 1 })
    @IsInt({ message: 'A ordem deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'A ordem é obrigatória.' })
    order: number;
}
