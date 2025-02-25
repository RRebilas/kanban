/*
  Warnings:

  - Added the required column `column_board_key` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `column_name` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "task" ADD COLUMN     "column_board_key" TEXT NOT NULL,
ADD COLUMN     "column_name" TEXT NOT NULL,
ADD COLUMN     "position" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "column" (
    "name" TEXT NOT NULL,
    "position" DOUBLE PRECISION NOT NULL,
    "status_color" VARCHAR(7),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "board_key" TEXT NOT NULL,

    CONSTRAINT "id" PRIMARY KEY ("board_key","name")
);

-- CreateIndex
CREATE INDEX "column_board_key_position_idx" ON "column"("board_key", "position");

-- CreateIndex
CREATE INDEX "task_column_board_key_column_name_position_idx" ON "task"("column_board_key", "column_name", "position");

-- AddForeignKey
ALTER TABLE "column" ADD CONSTRAINT "column_board_key_fkey" FOREIGN KEY ("board_key") REFERENCES "board"("key") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_column_board_key_column_name_fkey" FOREIGN KEY ("column_board_key", "column_name") REFERENCES "column"("board_key", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
