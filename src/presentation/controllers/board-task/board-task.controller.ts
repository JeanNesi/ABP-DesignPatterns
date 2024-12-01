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
  CreateBoardTaskDTO,
  ResponseBoardTaskDTO,
  UpdateBoardTaskDTO,
} from '../../../application/dtos/board-task';
import {
  CreateBoardTaskUseCase,
  DeleteBoardTaskUseCase,
  FindAllBoardTasksUseCase,
  FindBoardTaskByIdUseCase,
  UpdateBoardTaskUseCase,
  UpdateBoardTaskStatusUseCase,
  UpdateBoardTaskPriorityUseCase,
  CountBoardTasksByBoardIdUseCase,
  SearchBoardTasksByTitleOrDescriptionUseCase,
} from '../../../application/use-cases/board-task';
import { BoardStatusState } from '../../../domain/board-task/states/board-status-state ';
import { BoardTaskPriorityState } from '../../../domain/board-task/states/board-task-priority-state ';

@ApiTags('BoardTasks')
@Controller('boardTasks')
export class BoardTaskController {
  @Inject(CreateBoardTaskUseCase)
  private readonly createBoardTaskUseCase: CreateBoardTaskUseCase;

  @Inject(FindAllBoardTasksUseCase)
  private readonly findAllBoardTasksUseCase: FindAllBoardTasksUseCase;

  @Inject(FindBoardTaskByIdUseCase)
  private readonly findBoardTaskByIdUseCase: FindBoardTaskByIdUseCase;

  @Inject(UpdateBoardTaskUseCase)
  private readonly updateBoardTaskUseCase: UpdateBoardTaskUseCase;

  @Inject(DeleteBoardTaskUseCase)
  private readonly deleteBoardTaskUseCase: DeleteBoardTaskUseCase;

  @Inject(UpdateBoardTaskStatusUseCase)
  private readonly updateBoardTaskStatusUseCase: UpdateBoardTaskStatusUseCase;

  @Inject(UpdateBoardTaskPriorityUseCase)
  private readonly updateBoardTaskPriorityUseCase: UpdateBoardTaskPriorityUseCase;

  @Inject(CountBoardTasksByBoardIdUseCase)
  private readonly countBoardTasksByBoardIdUseCase: CountBoardTasksByBoardIdUseCase;

  @Inject(SearchBoardTasksByTitleOrDescriptionUseCase)
  private readonly searchBoardTasksByTitleOrDescriptionUseCase: SearchBoardTasksByTitleOrDescriptionUseCase;

  @Post()
  @HttpCode(201)
  @ApiResponse({
    status: 201,
    type: ResponseBoardTaskDTO,
  })
  @ApiBearerAuth()
  async create(@Body() dto: CreateBoardTaskDTO) {
    return this.createBoardTaskUseCase.execute(dto);
  }

  @Get()
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: [ResponseBoardTaskDTO],
  })
  @ApiBearerAuth()
  async findAll() {
    return this.findAllBoardTasksUseCase.execute();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: ResponseBoardTaskDTO,
  })
  @ApiBearerAuth()
  async findById(@Param('id') id: string) {
    return this.findBoardTaskByIdUseCase.execute(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: ResponseBoardTaskDTO,
  })
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body() dto: UpdateBoardTaskDTO) {
    return this.updateBoardTaskUseCase.execute(id, dto);
  }

  @Put(':id/status')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: ResponseBoardTaskDTO,
  })
  @ApiBearerAuth()
  async updateStatus(@Param('id') id: string, @Body('status') status: BoardStatusState) {
    return this.updateBoardTaskStatusUseCase.execute(id, status);
  }

  @Put(':id/priority')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: ResponseBoardTaskDTO,
  })
  @ApiBearerAuth()
  async updatePriority(@Param('id') id: string, @Body('priority') priority: BoardTaskPriorityState) {
    return this.updateBoardTaskPriorityUseCase.execute(id, priority);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiResponse({
    status: 204,
  })
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    await this.deleteBoardTaskUseCase.execute(id);
  }

  @Get('count/:boardId')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: Number,
  })
  @ApiBearerAuth()
  async count(@Param('boardId') boardId: string) {
    return this.countBoardTasksByBoardIdUseCase.execute(boardId);
  }

  @Get('search')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: [ResponseBoardTaskDTO],
  })
  @ApiBearerAuth()
  async search(@Body('keyword') keyword: string) {
    return this.searchBoardTasksByTitleOrDescriptionUseCase.execute(keyword);
  }
}
