import { User } from "../../entities/User";

export interface SignupGateway {
  createUser(user: User): Promise<string>;
}

export interface LoginGateway {
  getUserByEmail(email: string): Promise<User>;
}

export interface UpdatePasswordGateway {
  updatePassword(id: string, newPassword: string): Promise<void>;
}

export interface VerifyUserExistsGateway {
  verifyUserExists(id: string): Promise<boolean>;
}

export interface GetUserByIdGateway {
  getUserById(id: string): Promise<User>;
}