import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty } from "class-validator";

export class UpdateStatusDTO {
    @ApiProperty({ description: 'O status da tarefa', example: 'todo, doing, done' })
    @IsEmpty({ message: 'O status é obrigatório.' })
    status: string;
}