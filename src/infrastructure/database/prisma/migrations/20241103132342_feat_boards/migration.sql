-- CreateEnum
CREATE TYPE "BoardTaskPriority" AS ENUM ('low', 'medium', 'high');

-- CreateEnum
CREATE TYPE "BoardStatus" AS ENUM ('todo', 'doing', 'done');

-- CreateTable
CREATE TABLE "boards" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "studyTimeInMinutes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "boards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boardTasks" (
    "id" TEXT NOT NULL,
    "boardId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "averageStudyTimeInMinutes" INTEGER NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "priority" "BoardTaskPriority" NOT NULL DEFAULT 'low',
    "status" "BoardStatus" NOT NULL DEFAULT 'todo',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "boardTasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boardTaskSubtasks" (
    "id" TEXT NOT NULL,
    "boardTaskId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "boardTaskSubtasks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "boards_id_key" ON "boards"("id");

-- CreateIndex
CREATE UNIQUE INDEX "boardTasks_id_key" ON "boardTasks"("id");

-- CreateIndex
CREATE UNIQUE INDEX "boardTaskSubtasks_id_key" ON "boardTaskSubtasks"("id");

-- AddForeignKey
ALTER TABLE "boards" ADD CONSTRAINT "boards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boardTasks" ADD CONSTRAINT "boardTasks_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "boards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boardTaskSubtasks" ADD CONSTRAINT "boardTaskSubtasks_boardTaskId_fkey" FOREIGN KEY ("boardTaskId") REFERENCES "boardTasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
