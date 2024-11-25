import {
    IsInt,
    IsISO8601,
    IsOptional,
    IsString,
} from 'class-validator';

export class UpdateBoardDTO {
    @IsString({
        message: 'O título deve ser uma string.',
    })
    @IsOptional()
    title?: string;

    @IsString({
        message: 'A descrição deve ser uma string.',
    })
    @IsOptional()
    description?: string | null;

    @IsString({
        message: 'O id do usuário deve ser uma string.',
    })
    @IsOptional()
    userId?: string;

    @IsISO8601({}, { message: 'A data final deve possuir o formato ISO 8601.' })
    @IsOptional()
    dueDate?: Date;

    @IsInt({
        message: 'O tempo de estudo deve ser um número inteiro.',
    })
    @IsOptional()
    studyTimeInMinutes?: number;
}