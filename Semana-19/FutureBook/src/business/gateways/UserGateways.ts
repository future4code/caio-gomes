import { User } from "../entities/User";

export interface SignupGateway {
   createUser(user: User): Promise<string>;
}

export interface LoginGateway {
    getUserByEmail(email: string): Promise<User>;
}

export interface FollowUserGateway {
    createFollow(followerId: string, followedId: string): Promise<void>
}