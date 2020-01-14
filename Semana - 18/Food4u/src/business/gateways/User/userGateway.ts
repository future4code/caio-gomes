import { User } from './../../entities/User';

export interface UserGateway {
    login(email: string ): Promise<any>;
    signup(user: User ): Promise<void>;
    profile(token: string): Promise<any>;
}