import { BoardTaskSubtaskEntity } from './board-task-subtask.entity';

export interface IBoardTaskSubtaskRepository {
    create(subtask: BoardTaskSubtaskEntity): Promise<BoardTaskSubtaskEntity>;
    update(id: string, subtask: Partial<BoardTaskSubtaskEntity>): Promise<BoardTaskSubtaskEntity | null>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<BoardTaskSubtaskEntity | null>;
    findByBoardTaskId(boardTaskId: string): Promise<BoardTaskSubtaskEntity[]>;
    findAll(): Promise<BoardTaskSubtaskEntity[]>;
    updateCompletion(id: string, isCompleted: boolean): Promise<BoardTaskSubtaskEntity | null>;
}
