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
  CreateBoardDTO,
  ResponseBoardDTO,
  UpdateBoardDTO,
} from '../../../application/dtos/board';
import {
  CreateBoardUseCase,
  DeleteBoardUseCase,
  FindAllBoardsUseCase,
  FindBoardByIdUseCase,
  UpdateBoardUseCase,
} from '../../../application/use-cases/board';
import { AIService } from './utils/ai.service';
import { CreateBoardTaskUseCase } from 'src/application/use-cases/board-task';

@ApiTags('Boards')
@Controller('boards')
export class BoardController {
  @Inject(CreateBoardUseCase)
  private readonly createBoardUseCase: CreateBoardUseCase;

  @Inject(FindAllBoardsUseCase)
  private readonly findAllBoardsUseCase: FindAllBoardsUseCase;

  @Inject(FindBoardByIdUseCase)
  private readonly findBoardByIdUseCase: FindBoardByIdUseCase;

  @Inject(UpdateBoardUseCase)
  private readonly updateBoardUseCase: UpdateBoardUseCase;

  @Inject(DeleteBoardUseCase)
  private readonly deleteBoardUseCase: DeleteBoardUseCase;

  @Inject(CreateBoardTaskUseCase)
  private readonly createBoardTaskUseCase: CreateBoardTaskUseCase;

  @Inject(AIService)
  private readonly chatAdapter: AIService = new AIService();

  @Post()
  @HttpCode(201)
  @ApiResponse({
    status: 201,
    type: ResponseBoardDTO,
  })
  @ApiBearerAuth()
  async create(@Body() dto: CreateBoardDTO) {
    const response = await this.chatAdapter.createResponse(
      dto.title,
      dto.dueDate,
      dto.studyTimeInMinutes,
    );

    const board = await this.createBoardUseCase.execute(dto);

    const responseLength = response.length;
    for (let i = 0; i < responseLength; i++) {
      const task = response[i];
      await this.createBoardTaskUseCase.execute({
        ...task,
        boardId: board.id,
      });
    }

    return board;
  }

  @Get()
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: [ResponseBoardDTO],
  })
  @ApiBearerAuth()
  async findAll() {
    return this.findAllBoardsUseCase.execute();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: ResponseBoardDTO,
  })
  @ApiBearerAuth()
  async findById(@Param('id') id: string) {
    return this.findBoardByIdUseCase.execute(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: ResponseBoardDTO,
  })
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body() dto: UpdateBoardDTO) {
    // Gera a resposta do ChatAdapter (aqui usamos GPT como exemplo)
    const response = await this.chatAdapter.createResponse(
      dto.title,
      dto.dueDate,
      dto.studyTimeInMinutes,
    );
    console.log('Generated Response:', response);

    return this.updateBoardUseCase.execute(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiResponse({
    status: 204,
  })
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    await this.deleteBoardUseCase.execute(id);
  }
}
