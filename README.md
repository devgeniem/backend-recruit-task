# Geniem backend recruit task

This is a backend recruit task based on [objection.js typescript example](https://github.com/Vincit/objection.js/tree/master/examples/express-ts)

This is the beginning of a very simple express todo - app backend that contains two tables, users and todo - items.

Feel free to change the folder stucture or the express app setup itself.

The app contains initial data and few example endpoints. 

# Basic setup

Make sure you have [NodeJS](https://nodejs.org/en/) and Git installed.

1. Clone the repo by running `git@github.com:devgeniem/backend-recruit-task.git`.
2. Run `npm run setup`. This installs the dependencies, sets up a SQLite db and creates some initial data.

# goals

## change the data relationship
Currently each todo - item is related to the user. Create a new table that represents todo-lists so that the existing todo - items belong to todo-lists instead of the user. 

Create a migration that handles the existing data in such manner that each user will have one todo-list containing all the existing todo-items. 

Use the [knex cli migrations](https://knexjs.org/#Migrations) for this job. The main app entrypoint does the migration for you already, feel free to disable this if you want to use the cli only. 

## endpoint for creating lists
Create an endpoint that takes following json input:
```json
{
  title: "Saturday chores",
  todoItems: [
    {
      title: "Take out the trash"
    },
    {
      title: "Buy dogfood",
      description: "remember the good stuff"
    }
  ]
}
```
The endpoint should create the todo list row and all the children todo-items. Read up on [objection.js](http://vincit.github.io/objection.js/) ORM on how achieve this.

## optional considerations
The folder structure of the app doesn't scale particulary well. Restructure the app as you see fit in a manner that would suit production - grade application with significantly more features.


