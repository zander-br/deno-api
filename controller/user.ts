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

export { getUsers }