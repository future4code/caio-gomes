import {
  GetAllMatchesGateway
} from "../../gateways/UserGateway";

export class GetAllMatches {
  constructor(
    private getAllMatchesGateway: GetAllMatchesGateway
  ) {}

  
  async execute(input: GetAllMatchesInput): Promise<GetAllMatchesUCOutput> {
    const users = await this.getAllMatchesGateway.getAllMatches(input.userId);
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

export interface GetAllMatchesInput {
    userId: string
}

export interface GetAllMatchesUCOutput {
  users: UsersOfGetAllMatchesUCOutput[];
}

export interface UsersOfGetAllMatchesUCOutput {
  id: string;
  name: string;
  email: string;
  birthday: Date;
  age: number;
  photo: string;
}
