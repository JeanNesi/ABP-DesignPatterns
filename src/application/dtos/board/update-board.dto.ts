import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsInt,
    IsISO8601,
    IsOptional,
    IsString,
} from 'class-validator';

export class UpdateBoardDTO {
    @ApiProperty({
        description: 'O título do quadro',
        type: String,
    })
    @IsString({
        message: 'O título deve ser uma string.',
    })
    title?: string;

    @ApiPropertyOptional({
        description: 'A descrição do quadro',
        type: String,
        nullable: true,
    })
    @IsString({
        message: 'A descrição deve ser uma string.',
    })
    @IsOptional()
    description?: string | null;

    @ApiPropertyOptional({
        description: 'O id do usuário',
        type: String,
    })
    @IsString({
        message: 'O id do usuário deve ser uma string.',
    })
    userId?: string;

    @ApiPropertyOptional({
        description: 'A data final no formato ISO 8601',
        type: String,
        format: 'date-time',
    })
    @IsISO8601({}, { message: 'A data final deve possuir o formato ISO 8601.' })
    @IsOptional()
    dueDate?: Date;

    @ApiPropertyOptional({
        description: 'O tempo de estudo em minutos',
        type: Number,
    })
    @IsInt({
        message: 'O tempo de estudo deve ser um número inteiro.',
    })
    @IsOptional()
    studyTimeInMinutes?: number;
}