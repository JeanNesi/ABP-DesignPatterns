import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateBoardTaskSubTaskDTO {
    @IsString({ message: 'O id deve ser uma string.' })
    @IsNotEmpty({ message: 'O id é obrigatório.' })
    id: string;

    @IsString({ message: 'O id da tarefa do quadro deve ser uma string.' })
    @IsNotEmpty({ message: 'O id da tarefa do quadro é obrigatório.' })
    boardTaskId: string;

    @IsString({ message: 'O título deve ser uma string.' })
    @IsNotEmpty({ message: 'O título é obrigatório.' })
    title: string;

    @IsString({ message: 'A descrição deve ser uma string.' })
    @IsOptional()
    description?: string | null;

    @IsBoolean({ message: 'O campo de conclusão deve ser um booleano.' })
    @IsNotEmpty({ message: 'O campo de conclusão é obrigatório.' })
    isCompleted: boolean;

    @IsDate({ message: 'A data de criação deve ser uma data válida.' })
    @IsNotEmpty({ message: 'A data de criação é obrigatória.' })
    createdAt: Date;

    @IsDate({ message: 'A data de atualização deve ser uma data válida.' })
    @IsNotEmpty({ message: 'A data de atualização é obrigatória.' })
    updatedAt: Date;
}
