import { BoardEntity } from './board.entity';

export interface IBoardRepository {
    findAll(): Promise<BoardEntity[]>;
    findById(id: string): Promise<BoardEntity | null>;
    create(data: Partial<BoardEntity>): Promise<BoardEntity>;
    update(id: string, data: Partial<BoardEntity>): Promise<BoardEntity>;
    delete(id: string): Promise<void>;
}
