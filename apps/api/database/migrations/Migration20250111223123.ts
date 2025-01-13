import { Migration } from '@mikro-orm/migrations';

export class Migration20250111223123 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "board" ("id" serial primary key, "name" varchar(255) not null, "description" text not null default '');`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "board" cascade;`);
  }

}
