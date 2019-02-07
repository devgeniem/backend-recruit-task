const USERS = 'users'
const TODOS = 'todos'

const TODO_LIST = [
  {
    title: "Osta leipää"
  }, {
    title: "Maksa vuokra"
  }, {
    title: "Käytä koiraa pihalla"
  }
];

exports.seed = async function (knex) {
  await knex(USERS).insert([
    {
      username: "pentti",
      name: "Pentti",
      lastName: "Placeholder"
    }, {
      username: "milla",
      name: "Milla",
      lastName: "Mallikas"
    }, {
      username: "kaija",
      name: "Kaija",
      lastName: "Koodari"
    }
  ]);

  const users = await knex(USERS).select('*')

  users.forEach(async(user) => {
    const userTodos = TODO_LIST.map(baseItem => {
      const userTodoDetails = {
        userId: user.id,
        description: `${user.name} muista: ${baseItem.title}`
      }
      return Object.assign(userTodoDetails, baseItem)
    })
    await knex(TODOS)
      .insert(userTodos)
  });
};
