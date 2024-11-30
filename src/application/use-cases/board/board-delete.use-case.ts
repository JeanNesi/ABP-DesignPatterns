import { Inject, Injectable } from '@nestjs/common';
import { IBoardRepository } from '../../../domain/board/board-repository.interface';

@Injectable()
export class DeleteBoardUseCase {
    @Inject("IBoardRepository")
    private readonly boardRepository: IBoardRepository;

    async execute(id: string): Promise<void> {
        await this.boardRepository.delete(id);
    }
}