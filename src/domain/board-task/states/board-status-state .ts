export interface BoardStatusState {
  getStatus(): string;
  toInProgress(): BoardStatusState;
  toDone(): BoardStatusState;
  toTodo(): BoardStatusState;
}

export class TodoStatus implements BoardStatusState {
  getStatus(): string {
    return 'todo';
  }

  toTodo(): BoardStatusState {
    throw new Error('Task ja está em todo!');
  }

  toInProgress(): BoardStatusState {
    return new InProgressStatus();
  }

  toDone(): BoardStatusState {
    throw new Error('Não é possível mover para finalizado!');
  }
}

export class InProgressStatus implements BoardStatusState {
  getStatus(): string {
    return 'doing';
  }

  toTodo(): BoardStatusState {
    return new TodoStatus();
  }

  toInProgress(): BoardStatusState {
    throw new Error('Task ja está em progresso!');
  }

  toDone(): BoardStatusState {
    return new DoneStatus();
  }
}

export class DoneStatus implements BoardStatusState {
  getStatus(): string {
    return 'done';
  }

  toTodo(): BoardStatusState {
    return new TodoStatus();
  }

  toInProgress(): BoardStatusState {
    return new InProgressStatus();
  }

  toDone(): BoardStatusState {
    throw new Error('Task ja está pronta!');
  }
}
