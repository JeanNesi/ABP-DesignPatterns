import { ResponseBoardTaskDTO } from "../../../../application/dtos/board-task";
import { BoardTaskEntity } from "../../../../domain/board-task/board-task.entity";

export class BoardTaskMapper {
    static toResponseBoardTaskDTO(boardTaskEntity: BoardTaskEntity): ResponseBoardTaskDTO {
        if (!boardTaskEntity) {
            return null;
        }

        const dto = new ResponseBoardTaskDTO();

        dto.id = boardTaskEntity.id;
        dto.boardId = boardTaskEntity.boardId;
        dto.title = boardTaskEntity.title;
        dto.description = boardTaskEntity.description;
        dto.averageStudyTimeInMinutes = boardTaskEntity.averageStudyTimeInMinutes;
        dto.order = boardTaskEntity.order;

        dto.priority = boardTaskEntity.getPriorityDescription();
        dto.status = boardTaskEntity.getStatusDescription();

        dto.createdAt = boardTaskEntity.createdAt;
        dto.updatedAt = boardTaskEntity.updatedAt;

        return dto;
    }

    static toResponseBoardTaskDTOList(boardTaskEntities: BoardTaskEntity[]): ResponseBoardTaskDTO[] {
        if (!boardTaskEntities) {
            return [];
        }
        return boardTaskEntities.map(BoardTaskMapper.toResponseBoardTaskDTO);
    }
}