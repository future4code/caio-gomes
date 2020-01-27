import { User } from "./../entities/User";

export interface SignupGateway {
  createUser(user: User): Promise<string>;
}

export interface LoginGateway {
  getUserByEmail(email: string): Promise<User>;
}

export interface UpdatePassword {
  updatePassword(id: string, newPassword: string): Promise<void>;
}

export interface GetUserById {
  getUserById(id: string): Promise<User>;
}

export interface GetAllUsers {
  getAllUsers(): Promise<User[]>;
}
