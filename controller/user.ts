import { Response } from "https://deno.land/x/oak/mod.ts";

import { User } from "../model/user.ts";

let users: Array<User> = [
  {
    id: 'zander-br',
    name: 'Anderson Santos',
    email: 'anderson.feitoza.santos@gmail.com',
  },
  {
    id: 'couves',
    name: 'João das Couves',
    email: 'couves@hotmail.com',
  }
];

function getUsers({ response }: { response: Response }) {
  response.body = users;
}

function getUser({ params, response }: { params: { id: string }; response: Response }) {
  const user = users.find(user => user.id === params.id);

  if (user) {
    response.status = 200;
    response.body = user;
  } else {
    response.status = 404;
    response.body = { message: "User not found." };
  }
}

export { getUsers, getUser }