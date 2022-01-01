import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userIsAdmin = this.usersRepository.findById(user_id);
    if (!userIsAdmin.admin) throw new Error("User is not admin");

    const user = this.usersRepository.list();
    return user;
  }
}

export { ListAllUsersUseCase };
