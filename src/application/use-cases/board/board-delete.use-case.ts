import { Inject, Injectable } from '@nestjs/common';
import { BoardRepository } from 'src/infrastructure/database/prisma/repositories/board.repository';

@Injectable()
export class DeleteBoardUseCase {
    @Inject(BoardRepository)
    private readonly boardRepository: BoardRepository;

    async execute(id: string): Promise<void> {
        await this.boardRepository.delete(id);
    }
}