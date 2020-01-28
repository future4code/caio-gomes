import { GetAllUsersGateway } from "../../gateways/UserGateway";

export class GetAllUsersUC {
  constructor(private getAllUsersGateway: GetAllUsersGateway) {}

  async execute(): Promise<GetAllUsersUCOutput> {
    const users = await this.getAllUsersGateway.getAllUsers();
    return {
      users: users.map(user => ({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        birthday: user.getBirthday(),
        photo: user.getPhoto(),
        password: user.getPassword()
      }))
    };
  }
}

export interface GetAllUsersUCOutput {
  users: UsersOfGetAllUsersUCOutput[];
}

export interface UsersOfGetAllUsersUCOutput {
  id: string;
  name: string;
  email: string;
  birthday: Date;
  photo: string;
  password: string;
}
