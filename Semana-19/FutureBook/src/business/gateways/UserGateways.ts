import { User } from "../entities/User";

export interface SignupGateway {
   signup(user: User): Promise<string>;
}

export interface LoginGateway {
    login(email: string): Promise<User>;
}