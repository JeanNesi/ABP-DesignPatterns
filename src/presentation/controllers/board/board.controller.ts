//#region IMPORTS
import {
  Body,
  Controller,
  // Get,
  HttpCode,
  Inject,
  // Param,
  Post,
  // Put,
  // Delete,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

//#endregion

//#region DTOS
import { BoardResponseDTO, CreateBoardDTO } from 'src/application/dtos/board';
//#endregion

//#region USE CASES
import { CreateBoardUseCase } from 'src/application/use-cases/board/board-create.use-case';
//#endregion

@ApiTags('Boards')
@Controller('boards')
export class BoardController {
  //#region INJECTS
  @Inject(CreateBoardUseCase)
  private readonly createBoardUseCase: CreateBoardUseCase;

  // @Inject(GetAllBoardsUseCase)
  // private readonly getAllBoardsUseCase: GetAllBoardsUseCase;

  // @Inject(GetBoardByIdUseCase)
  // private readonly getBoardByIdUseCase: GetBoardByIdUseCase;

  // @Inject(UpdateBoardUseCase)
  // private readonly updateBoardUseCase: UpdateBoardUseCase;

  // @Inject(DeleteBoardUseCase)
  // private readonly deleteBoardUseCase: DeleteBoardUseCase;
  //#endregion

  @Post()
  @HttpCode(201)
  @ApiResponse({
    status: 201,
    type: BoardResponseDTO,
  })
  async create(@Body() dto: CreateBoardDTO) {
    return this.createBoardUseCase.execute(dto);
  }

  // @Get()
  // @HttpCode(200)
  // @ApiResponse({
  //   status: 200,
  //   type: [BoardResponseDTO],
  // })
  // async findAll() {
  //   return this.getAllBoardsUseCase.execute();
  // }

  // @Get(':id')
  // @HttpCode(200)
  // @ApiResponse({
  //   status: 200,
  //   type: BoardResponseDTO,
  // })
  // async findById(@Param('id') id: string) {
  //   return this.getBoardByIdUseCase.execute(id);
  // }

  // @Put(':id')
  // @HttpCode(200)
  // @ApiResponse({
  //   status: 200,
  //   type: BoardResponseDTO,
  // })
  // async update(@Param('id') id: string, @Body() dto: UpdateBoardDTO) {
  //   return this.updateBoardUseCase.execute(id, dto);
  // }

  // @Delete(':id')
  // @HttpCode(204)
  // @ApiResponse({
  //   status: 204,
  // })
  // async remove(@Param('id') id: string) {
  //   await this.deleteBoardUseCase.execute(id);
  // }
}
