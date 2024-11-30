import { ResponseBoardTaskSubTaskDTO } from "../../../../application/dtos/board-task-subtask";
import { BoardTaskSubtaskEntity } from "../../../../domain/board-task-subtask/board-task-subtask.entity";

export class BoardTaskSubtaskMapper {
    static toResponseBoardTaskSubTaskDTO(
        boardTaskSubtaskEntity: BoardTaskSubtaskEntity
    ): ResponseBoardTaskSubTaskDTO {
        if (!boardTaskSubtaskEntity) {
            return null;
        }

        const dto = new ResponseBoardTaskSubTaskDTO();

        dto.id = boardTaskSubtaskEntity.id;
        dto.boardTaskId = boardTaskSubtaskEntity.boardTaskId;
        dto.title = boardTaskSubtaskEntity.title;
        dto.description = boardTaskSubtaskEntity.description;
        dto.isCompleted = boardTaskSubtaskEntity.isCompleted;

        dto.createdAt = boardTaskSubtaskEntity.createdAt;
        dto.updatedAt = boardTaskSubtaskEntity.updatedAt;

        return dto;
    }

    static toResponseBoardTaskSubTaskDTOList(boardTaskEntities: BoardTaskSubtaskEntity[]): ResponseBoardTaskSubTaskDTO[] {
        if (!boardTaskEntities) {
            return [];
        }
        return boardTaskEntities.map(BoardTaskSubtaskMapper.toResponseBoardTaskSubTaskDTO);
    }

}
