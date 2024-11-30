export interface BoardTaskPriorityState {
  getPriorityLevel(): string;
}

export class LowPriority implements BoardTaskPriorityState {
  getPriorityLevel(): string {
    return 'low';
  }
}

export class MediumPriority implements BoardTaskPriorityState {
  getPriorityLevel(): string {
    return 'medium';
  }
}

export class HighPriority implements BoardTaskPriorityState {
  getPriorityLevel(): string {
    return 'high';
  }
}
