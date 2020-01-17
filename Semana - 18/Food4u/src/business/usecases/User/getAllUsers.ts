import { UserGateway } from '../../gateways/User/userGateway';
import { User } from '../../entities/User';

export class GetAllUsersUC {
    constructor(
        private UserGateway: UserGateway,
    ) {}
    
    async execute(): Promise<User[]> {
      const user = await this.UserGateway.getAllUsers();
        
      return user;
    }
} 


