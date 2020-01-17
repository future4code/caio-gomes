import { User } from './../../entities/User';

export interface UserGateway {
    login(email: string ): Promise<User>;
    signup(user: User ): Promise<void>;
    verifyUserExists(id: string): Promise<boolean>
}