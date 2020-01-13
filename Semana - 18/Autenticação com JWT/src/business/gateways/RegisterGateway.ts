import { User } from './../entities/User';

export interface RegisterUserGateway {
    createUser(input: User ): Promise<void>;
}