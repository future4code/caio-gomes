import { User } from './../entities/User';

export interface SignupGateway {
    createUser(user: User): Promise<string>;
 }