export interface BoardStatusState {
    getStatus(): string;
}

export class TodoStatus implements BoardStatusState {
    getStatus(): string {
        return 'todo';
    }
}

export class InProgressStatus implements BoardStatusState {
    getStatus(): string {
        return 'doing';
    }
}

export class DoneStatus implements BoardStatusState {
    getStatus(): string {
        return 'done';
    }
}
