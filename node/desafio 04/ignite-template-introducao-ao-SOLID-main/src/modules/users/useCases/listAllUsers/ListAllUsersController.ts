import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const all = this.listAllUsersUseCase.execute()
    console.log(all)
    return response.json(all)
  }
}

export { ListAllUsersController };
