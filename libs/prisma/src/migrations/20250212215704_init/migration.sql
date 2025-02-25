-- CreateTable
CREATE TABLE "board" (
    "key" VARCHAR(10) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "task_sequence" (
    "board_key" TEXT NOT NULL,
    "last_number" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "task_sequence_pkey" PRIMARY KEY ("board_key")
);

-- CreateTable
CREATE TABLE "task" (
    "id" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "board_key" TEXT NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "board_key_key" ON "board"("key");

-- AddForeignKey
ALTER TABLE "task_sequence" ADD CONSTRAINT "task_sequence_board_key_fkey" FOREIGN KEY ("board_key") REFERENCES "board"("key") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_board_key_fkey" FOREIGN KEY ("board_key") REFERENCES "board"("key") ON DELETE RESTRICT ON UPDATE CASCADE;

create or replace function generate_task_id()
  returns trigger as $$
begin
  insert into task_sequence (board_key)
  values (NEW.board_key)
  on conflict (board_key) do nothing;

  with next_seq as (
    update task_sequence
      set last_number = last_number + 1
      where board_key = NEW.board_key
      returning board_key, last_number
  )
  select board_key || '-' || last_number
  from next_seq
  into NEW.id;

  return NEW;
end;
$$ language plpgsql;

create trigger before_insert_generate_task_id
  before insert on task
  for each row
execute function generate_task_id();
