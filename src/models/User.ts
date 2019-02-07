import { Model } from 'objection';
import { tables } from '../../constants';
import { join } from 'path';

export default class User extends Model {
  static tableName = tables.USER_TABLE;

  readonly id!: number;
  username: string;
  name?: string;

  static jsonSchema = {
    type: 'object',
    required: ['username'],

    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 },
    },
  };

  // // This object defines the relations to other models.
  // static relationMappings = {
  //   todos: {
  //     relation: Model.HasManyRelation,
  //     modelClass: join(__dirname, 'Todo'),
  //     join: {
  //       from: 'todos.userId',
  //       to: 'user.id',
  //     },
  //   },
  // };
}
