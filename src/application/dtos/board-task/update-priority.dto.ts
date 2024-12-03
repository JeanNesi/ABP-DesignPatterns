import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty } from "class-validator";

export class UpdatePriorityDTO {
    @ApiProperty({ description: 'A prioridade da tarefa', example: 'Alta' })
    @IsNotEmpty({ message: 'A prioridade é obrigatória.' })
    @IsIn(['high', 'medium', 'low'], { message: 'A prioridade deve ser high, medium ou low.' })
    priority: string;
}