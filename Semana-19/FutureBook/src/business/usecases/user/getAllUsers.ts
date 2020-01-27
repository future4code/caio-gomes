import { GetAllUsers } from "../../gateways/UserGateways";

export class GetAllUsersUC {
  constructor(private userGateway: GetAllUsers) {}

  async execute(): Promise<GetAllUsersOutput> {
    const users = await this.userGateway.getAllUsers();
    return {
      users: users.map(user => ({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail()
      }))
    };
  }
}

export interface GetAllUsersOutput {
  users: UsersOfGetAllUsersOutput[];
}

export interface UsersOfGetAllUsersOutput {
  id: string;
  name: string;
  email: string;
}
