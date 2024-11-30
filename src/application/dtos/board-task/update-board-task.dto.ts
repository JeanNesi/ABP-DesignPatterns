import {
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString
} from 'class-validator';

export class UpdateBoardTaskDTO {
    @IsString({ message: 'O id do quadro deve ser uma string.' })
    @IsNotEmpty({ message: 'O id do quadro é obrigatório.' })
    boardId: string;

    @IsString({ message: 'O título deve ser uma string.' })
    @IsNotEmpty({ message: 'O título é obrigatório.' })
    title: string;

    @IsString({ message: 'A descrição deve ser uma string.' })
    @IsOptional()
    description?: string | null;

    @IsInt({ message: 'O tempo médio de estudo deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'O tempo médio de estudo é obrigatório.' })
    averageStudyTimeInMinutes: number;

    @IsInt({ message: 'A ordem deve ser um número inteiro.' })
    @IsNotEmpty({ message: 'A ordem é obrigatória.' })
    order: number;

    @IsNotEmpty({ message: 'A prioridade é obrigatória.' })
    priority: string;

    @IsNotEmpty({ message: 'O status é obrigatório.' })
    status: string;
}
