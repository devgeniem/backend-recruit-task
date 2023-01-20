import * as express from 'express';
import { BadRequestError, NotFoundError } from './Errors';
import Todo from './models/Todo';
import User from './models/User';

export default (router: express.Router) => {
  router.get('/users', async (req, res) => {
    const users = await User.query();
    res.send(users);
  });

  router.get('/todos', async (req, res) => {
    const todos = await Todo.query();
    res.send(todos);
  });

  router.get('/todos/:id', async (req) => {
    const id = req.query.id;
    if (!id || Number.isInteger(id)) throw new BadRequestError('Invalid TodoID!');

    const todo = await Todo.query().where({ id }).first();
    if (!todo) throw new NotFoundError('No such Todo!');
    return todo;
  });
};
