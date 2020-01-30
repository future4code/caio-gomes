import { User } from "./../entities/User";

export interface SignupGateway {
  createUser(user: User): Promise<string>;
}

export interface LoginGateway {
  getUserByEmail(email: string): Promise<User>;
}

export interface UpdatePasswordGateway {
  updatePassword(id: string, newPassword: string): Promise<void>;
}

export interface GetUserByIdGateway {
  getUserById(id: string): Promise<User>;
}

export interface GetAllMatchesGateway {
  getAllMatches(userId: string): Promise<User[]>;
}

export interface GetAllUsersGateway {
  getAllUsers(): Promise<User[]>;
}

export interface MatchUserGateway {
  createMatch(userId: string, userToMatchId: string): Promise<void>;
}

export interface UnmatchUserGateway {
  createUnmatch(userId: string, userToMatchId: string): Promise<void>;
}

export interface VerifyUserExistsGateway {
  verifyUserExists(id: string): Promise<boolean>;
}

export interface VerifyMatchExists {
  verifyMatchExists(userId: string, userMatchedId: string): Promise<boolean>;
}
