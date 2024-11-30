import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateBoardTaskSubTaskDTO,
  ResponseBoardTaskSubTaskDTO,
  UpdateBoardTaskSubTaskDTO,
} from '../../../application/dtos/board-task-subtask';
import {
  CreateSubtaskUseCase,
  DeleteSubtaskUseCase,
  FindAllSubtasksUseCase,
  FindSubtaskByIdUseCase,
  UpdateSubtaskCompletionUseCase,

  UpdateSubtaskUseCase
} from '../../../application/use-cases/board-task-subtask';

@ApiTags('BoardTaskSubtasks')
@Controller('boardTaskSubtasks')
export class BoardTaskSubtaskController {
  @Inject(CreateSubtaskUseCase)
  private readonly createSubtaskUseCase: CreateSubtaskUseCase;

  @Inject(FindAllSubtasksUseCase)
  private readonly findAllSubtasksUseCase: FindAllSubtasksUseCase;

  @Inject(FindSubtaskByIdUseCase)
  private readonly findSubtaskByIdUseCase: FindSubtaskByIdUseCase;

  @Inject(UpdateSubtaskUseCase)
  private readonly updateSubtaskUseCase: UpdateSubtaskUseCase;

  @Inject(DeleteSubtaskUseCase)
  private readonly deleteSubtaskUseCase: DeleteSubtaskUseCase;

  @Inject(UpdateSubtaskCompletionUseCase)
  private readonly updateSubtaskCompletionUseCase: UpdateSubtaskCompletionUseCase;

  @Post()
  @HttpCode(201)
  @ApiResponse({
    status: 201,
    type: ResponseBoardTaskSubTaskDTO,
  })
  @ApiBearerAuth()
  async create(@Body() dto: CreateBoardTaskSubTaskDTO) {
    return this.createSubtaskUseCase.execute(dto);
  }

  @Get()
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: [ResponseBoardTaskSubTaskDTO],
  })
  @ApiBearerAuth()
  async findAll() {
    return this.findAllSubtasksUseCase.execute();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: ResponseBoardTaskSubTaskDTO,
  })
  @ApiBearerAuth()
  async findById(@Param('id') id: string) {
    return this.findSubtaskByIdUseCase.execute(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: ResponseBoardTaskSubTaskDTO,
  })
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body() dto: UpdateBoardTaskSubTaskDTO) {
    return this.updateSubtaskUseCase.execute(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiResponse({
    status: 204,
  })
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    await this.deleteSubtaskUseCase.execute(id);
  }

}
