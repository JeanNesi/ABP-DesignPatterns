import { BoardTaskEntity } from './board-task.entity';
import { BoardStatusState } from './states/board-status-state ';
import { BoardTaskPriorityState } from './states/board-task-priority-state ';

export interface IBoardTaskRepository {
    create(task: Partial<BoardTaskEntity>): Promise<BoardTaskEntity>;
    update(id: string, task: Partial<BoardTaskEntity>): Promise<BoardTaskEntity | null>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<BoardTaskEntity | null>;
    findByBoardId(boardId: string): Promise<BoardTaskEntity[]>;
    findAll(): Promise<BoardTaskEntity[]>;
    updateStatus(id: string, status: BoardStatusState): Promise<BoardTaskEntity | null>;
    updatePriority(id: string, priority: BoardTaskPriorityState): Promise<BoardTaskEntity | null>;
    countByBoardId(boardId: string): Promise<number>;
    searchByTitleOrDescription(keyword: string): Promise<BoardTaskEntity[]>;
}
