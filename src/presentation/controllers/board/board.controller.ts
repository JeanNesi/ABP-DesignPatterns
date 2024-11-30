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
} from 'src/application/dtos/board';
import {
  CreateBoardUseCase,
  DeleteBoardUseCase,
  FindAllBoardsUseCase,
  FindBoardByIdUseCase,
  UpdateBoardUseCase,
} from 'src/application/use-cases/board';

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

  @Post()
  @HttpCode(201)
  @ApiResponse({
    status: 201,
    type: ResponseBoardDTO,
  })
  @ApiBearerAuth()
  async create(@Body() dto: CreateBoardDTO) {
    return this.createBoardUseCase.execute(dto);
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
