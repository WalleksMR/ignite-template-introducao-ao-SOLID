import { Request, Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";
import { listAllUsersController } from "../modules/users/useCases/listAllUsers";
import { showUserProfileController } from "../modules/users/useCases/showUserProfile";
import { turnUserAdminController } from "../modules/users/useCases/turnUserAdmin";

const usersRoutes = Router();

interface IRequest extends Request {
  headers: {
    user_id: string;
  };
}
usersRoutes.post("/", (request, response) =>
  createUserController.handle(request, response)
);

usersRoutes.patch("/:user_id/admin", (request, response) =>
  turnUserAdminController.handle(request, response)
);

usersRoutes.get("/:user_id", (request, response) =>
  showUserProfileController.handle(request, response)
);

usersRoutes.get("/", (request: IRequest, response) =>
  listAllUsersController.handle(request, response)
);

export { usersRoutes };
