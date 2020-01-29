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
        age: user.getAge(),
        photo: user.getPhoto(),
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
  age: number,
  photo: string;
}
