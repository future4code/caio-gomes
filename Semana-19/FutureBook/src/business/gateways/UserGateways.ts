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

export interface UnfollowUserGateway {
    createUnfollow(followerId: string, followedId: string): Promise<void>
}

export interface VerifyUserExists {
    verifyUserExists(id: string): Promise<boolean>
}

export interface GetAllUsers {
    getAllUsers(): Promise<User[]>;
}

export interface VerifyRelationExists {
    verifyRelationExists(followerId: string, followedId: string): Promise<boolean>
}