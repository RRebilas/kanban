import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Board {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property({type: 'text'})
  description = ''
}
