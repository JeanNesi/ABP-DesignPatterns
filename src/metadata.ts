/* eslint-disable */
export default async () => {
    const t = {
        ["./domain/board-task/board-task.entity"]: await import("./domain/board-task/board-task.entity"),
        ["./application/dtos/board-task-subtask/response-board-task-subtask.dto"]: await import("./application/dtos/board-task-subtask/response-board-task-subtask.dto"),
        ["./application/dtos/board-task/response-board-task.dto"]: await import("./application/dtos/board-task/response-board-task.dto"),
        ["./application/dtos/board-task/update-status.dto"]: await import("./application/dtos/board-task/update-status.dto"),
        ["./application/dtos/board-task/update-priority.dto"]: await import("./application/dtos/board-task/update-priority.dto"),
        ["./application/dtos/board/response-board.dto"]: await import("./application/dtos/board/response-board.dto"),
        ["./application/dtos/user/userCreateReturn.dto"]: await import("./application/dtos/user/userCreateReturn.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("./application/dtos/user/userCreateReturn.dto"), { "UserCreateReturnDTO": { id: { required: true, type: () => String }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, image: { required: false, type: () => String, nullable: true } } }], [import("./application/dtos/user/userCreate.dto"), { "UserCreateDTO": { name: { required: true, type: () => String }, email: { required: true, type: () => String }, image: { required: false, type: () => String, nullable: true }, password: { required: true, type: () => String, minLength: 8 }, confirmPassword: { required: true, type: () => String, minLength: 8 } } }], [import("./application/dtos/user/user-update.dto"), { "UserUpdateDTO": { id: { required: true, type: () => String }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, image: { required: false, type: () => String, nullable: true } } }], [import("./application/dtos/user/userFindById.dto"), { "UserFindByIdDTO": { id: { required: true, type: () => String } } }], [import("./application/dtos/user/userFindByIdReturn.dto"), { "UserFindByIdReturnDTO": { id: { required: true, type: () => String }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, image: { required: false, type: () => String, nullable: true } } }], [import("./application/dtos/user/userFindRefreshTokenByIdReturn.dto"), { "UserFindRefreshTokenByIdReturnDTO": { id: { required: true, type: () => String }, refreshToken: { required: true, type: () => String } } }], [import("./application/dtos/user/userFindPasswordByIdOrEmail.dto"), { "UserFindPasswordByIdOrEmailDTO": { id: { required: false, type: () => String }, email: { required: false, type: () => String } } }], [import("./application/dtos/user/userFindPasswordByIdOrEmailReturn.dto"), { "UserFindPasswordByIdOrEmailReturnDTO": { id: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./application/dtos/user/user-find-many.dto"), { "UserFindManyDTO": { users: { required: false, type: () => [String] }, startAt: { required: false, type: () => String }, endAt: { required: false, type: () => String }, page: { required: false, type: () => Number, minimum: 1 }, take: { required: false, type: () => Number, minimum: 1, maximum: 100 } } }], [import("./application/dtos/user/user-delete-by-id.dto"), { "UserDeleteByIdDTO": { id: { required: true, type: () => String } } }], [import("./domain/user/user.entity"), { "UserEntity": { id: { required: false, type: () => String }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, image: { required: false, type: () => String, nullable: true }, password: { required: true, type: () => String }, refreshToken: { required: false, type: () => String, nullable: true } } }], [import("./application/dtos/access/accessReturn.dto"), { "AccessReturnDTO": { accessToken: { required: true, type: () => String } } }], [import("./application/dtos/access/access.dto"), { "AccessDTO": { email: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./application/dtos/access/accessUpdatePassword.dto"), { "AccessUpdatePasswordDTO": { token: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 8 }, confirmPassword: { required: true, type: () => String, minLength: 8 } } }], [import("./application/dtos/access/accessSendSendEmailForUpdatePassword.dto"), { "AccessSendEmailForUpdatePasswordDTO": { email: { required: true, type: () => String }, redirectUrl: { required: true, type: () => String } } }], [import("./application/dtos/board-task-subtask/create-board-task-subtask.dto"), { "CreateBoardTaskSubTaskDTO": { boardTaskId: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: false, type: () => String, nullable: true }, isCompleted: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./application/dtos/board-task-subtask/response-board-task-subtask.dto"), { "ResponseBoardTaskSubTaskDTO": { id: { required: true, type: () => String }, boardTaskId: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: false, type: () => String }, isCompleted: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./application/dtos/board-task-subtask/update-board-task-subtask.dto"), { "UpdateBoardTaskSubTaskDTO": { id: { required: true, type: () => String }, boardTaskId: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: false, type: () => String, nullable: true }, isCompleted: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./domain/board-task-subtask/board-task-subtask.entity"), { "BoardTaskSubtaskEntity": { id: { required: true, type: () => String }, boardTaskId: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: true, type: () => String }, isCompleted: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./domain/board-task/board-task.entity"), { "BoardTaskEntity": { id: { required: true, type: () => String }, boardId: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: true, type: () => String }, averageStudyTimeInMinutes: { required: true, type: () => Number }, order: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./application/dtos/board-task/create-board-task.dto"), { "CreateBoardTaskDTO": { boardId: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: false, type: () => String }, averageStudyTimeInMinutes: { required: true, type: () => Number }, order: { required: true, type: () => Number }, priority: { required: true, type: () => String } } }], [import("./application/dtos/board-task/response-board-task.dto"), { "ResponseBoardTaskDTO": { id: { required: true, type: () => String }, boardId: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: false, type: () => String }, averageStudyTimeInMinutes: { required: true, type: () => Number }, order: { required: true, type: () => Number }, priority: { required: true, type: () => String }, status: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./application/dtos/board-task/update-board-task.dto"), { "UpdateBoardTaskDTO": { boardId: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: false, type: () => String, nullable: true }, averageStudyTimeInMinutes: { required: true, type: () => Number }, order: { required: true, type: () => Number } } }], [import("./application/dtos/board-task/update-priority.dto"), { "UpdatePriorityDTO": { priority: { required: true, type: () => String } } }], [import("./application/dtos/board-task/update-status.dto"), { "UpdateStatusDTO": { status: { required: true, type: () => String } } }], [import("./application/dtos/board/create-board.dto"), { "CreateBoardDTO": { title: { required: true, type: () => String }, description: { required: false, type: () => String, nullable: true }, userId: { required: true, type: () => String }, dueDate: { required: true, type: () => Date }, studyTimeInMinutes: { required: true, type: () => Number } } }], [import("./application/dtos/board/response-board.dto"), { "ResponseBoardDTO": { id: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: false, type: () => String }, userId: { required: true, type: () => String }, dueDate: { required: true, type: () => Date }, studyTimeInMinutes: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./application/dtos/board/update-board.dto"), { "UpdateBoardDTO": { title: { required: false, type: () => String }, description: { required: false, type: () => String, nullable: true }, userId: { required: false, type: () => String }, dueDate: { required: false, type: () => Date }, studyTimeInMinutes: { required: false, type: () => Number } } }], [import("./domain/board/board.entity"), { "BoardEntity": { id: { required: true, type: () => String }, title: { required: true, type: () => String }, description: { required: false, type: () => String }, userId: { required: true, type: () => String }, dueDate: { required: true, type: () => Date }, studyTimeInMinutes: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, tasks: { required: true, type: () => [t["./domain/board-task/board-task.entity"].BoardTaskEntity], nullable: true } } }], [import("./application/dtos/register/registerSendEmailForRegistrationUser.dto"), { "RegisterSendEmailForRegistrationUserDTO": { email: { required: true, type: () => String }, redirectUrl: { required: true, type: () => String } } }], [import("./application/dtos/register/registerUser.dto"), { "RegisterUserDTO": { token: { required: true, type: () => String }, name: { required: true, type: () => String }, image: { required: false, type: () => String, nullable: true }, password: { required: true, type: () => String, minLength: 8 }, confirmPassword: { required: true, type: () => String, minLength: 8 } } }], [import("./domain/userPermission/user-permission.entity"), { "UserPermissionEntity": { id: { required: false, type: () => String }, permission: { required: true, type: () => Object }, userId: { required: true, type: () => String }, createdAt: { required: false, type: () => Date }, updatedAt: { required: false, type: () => Date } } }], [import("./application/dtos/user-permission/user-permission-create.dto"), { "UserPermissionCreateDTO": { permission: { required: true, type: () => Object }, userId: { required: true, type: () => String } } }], [import("./application/dtos/user-permission/user-permission-delete-by-id.dto"), { "UserPermissionDeleteByIdDTO": { id: { required: true, type: () => String } } }], [import("./application/dtos/user/userDeleteById.dto"), { "UserDeleteByIdDTO": { id: { required: true, type: () => String } } }]], "controllers": [[import("./presentation/controllers/access/access.controller"), { "AccessController": { "Login": {}, "UpdatePassword": {}, "SendUpdatePasswordEmail": {}, "Logout": {}, "RefreshAccessToken": {} } }], [import("./presentation/controllers/board-task-subtask/board-task-subtask.controller"), { "BoardTaskSubtaskController": { "create": { type: t["./application/dtos/board-task-subtask/response-board-task-subtask.dto"].ResponseBoardTaskSubTaskDTO }, "findAll": { type: [t["./application/dtos/board-task-subtask/response-board-task-subtask.dto"].ResponseBoardTaskSubTaskDTO] }, "findById": { type: t["./application/dtos/board-task-subtask/response-board-task-subtask.dto"].ResponseBoardTaskSubTaskDTO }, "update": { type: t["./application/dtos/board-task-subtask/response-board-task-subtask.dto"].ResponseBoardTaskSubTaskDTO }, "remove": {} } }], [import("./presentation/controllers/board-task/board-task.controller"), { "BoardTaskController": { "create": { type: t["./application/dtos/board-task/response-board-task.dto"].ResponseBoardTaskDTO }, "findAll": { type: [t["./application/dtos/board-task/response-board-task.dto"].ResponseBoardTaskDTO] }, "findById": { type: t["./application/dtos/board-task/response-board-task.dto"].ResponseBoardTaskDTO }, "update": { type: t["./application/dtos/board-task/response-board-task.dto"].ResponseBoardTaskDTO }, "updateStatus": { type: t["./application/dtos/board-task/update-status.dto"].UpdateStatusDTO }, "updatePriority": { type: t["./application/dtos/board-task/update-priority.dto"].UpdatePriorityDTO }, "remove": {}, "count": { type: Number }, "search": { type: [t["./application/dtos/board-task/response-board-task.dto"].ResponseBoardTaskDTO] } } }], [import("./presentation/controllers/board/board.controller"), { "BoardController": { "create": { type: t["./application/dtos/board/response-board.dto"].ResponseBoardDTO }, "findAll": { type: [t["./application/dtos/board/response-board.dto"].ResponseBoardDTO] }, "findById": { type: t["./application/dtos/board/response-board.dto"].ResponseBoardDTO }, "update": { type: t["./application/dtos/board/response-board.dto"].ResponseBoardDTO }, "remove": {} } }], [import("./presentation/controllers/register/register.controller"), { "RegisterController": { "SendEmail": {}, "Create": { type: t["./application/dtos/user/userCreateReturn.dto"].UserCreateReturnDTO } } }], [import("./presentation/controllers/user-permission/user-permission.controller"), { "UserPermissionController": { "Create": {}, "DeleteById": {} } }]] } };
};