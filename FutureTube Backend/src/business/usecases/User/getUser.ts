import { GetUserByIdGateway } from "../../gateways/users/UserGateway";


export class GetUserUC {
  constructor(
    private getUserByIdGateway: GetUserByIdGateway,
  ) {}
  async execute(input: GetUserInput): Promise<GetUserOutput> {
    
    const user = await this.getUserByIdGateway.getUserById(input.token);
    
    return {
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      photo: user.getPhoto()
    };
  }
}

export interface GetUserInput {
 token: string;
}

interface GetUserOutput {
  firstName: string;
  lastName: string;
  photo: string;
}
