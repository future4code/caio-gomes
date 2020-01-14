import { AuthenticationGateway } from './../../gateways/Auth/authenticationGateway';
import { UserGateway } from '../../gateways/User/userGateway';

import { User } from '../../entities/User';

export class GetProfileUC {
    constructor(
        private userGateway: UserGateway,
        private authGateway: AuthenticationGateway
    ) {}
    
    async execute(token: string): Promise<GetProfileOutput> {
       const userID = this.authGateway.getUserIDfromToken(token)
       const user = await this.userGateway.profile(userID)

        return {
            id: user.getId().toString(),
            name: user.getName(),
            age: user.getAge(),
            email: user.getEmail()
        }
    }
}

export interface GetProfileOutput {
    id: string;
    name: string;
    age: number;
    email: string
}