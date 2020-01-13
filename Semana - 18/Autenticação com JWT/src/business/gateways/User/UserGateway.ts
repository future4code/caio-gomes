import { User } from './../../entities/User';

export interface UserGateway {
    getUserByEmail(email: string ): Promise<any>;
    createUser(user: User ): Promise<void>;
}