import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest extends Request {
  headers: {
    user_id: string;
  };
}
class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: IRequest, response: Response): Response {
    const { user_id } = request.headers;
    try {
      const user = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ error });
    }
    // Complete aqui
  }
}

export { ListAllUsersController };
