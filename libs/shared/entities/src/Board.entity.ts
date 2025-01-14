import { Check, Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import {v4 as uuid} from 'uuid';
import { BaseEntity } from './Base.entity';

@Entity()
export class Board extends BaseEntity {
  @PrimaryKey({type: 'uuid'})
  id = uuid();

  @Property()
  @Unique()
  @Check({expression: 'key ~ \'^[A-Z0-9]+$\''})
  key!: string;

  @Property()
  name!: string;

  @Property({ type: 'text' })
  description = '';
}
