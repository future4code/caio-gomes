import { GetAllUsersUC } from "../business/usecases/user/getAllUsers";
import { UserDataBase } from "../data/userDatabase";
import { SignupUC } from "../business/usecases/user/signup";
import { JwtAuthService } from "../services/auth/jwtAuthentication";
import { BcryptService } from "../services/cryptography/bcrypt";
import { V4IdGenerator } from "../services/auth/v4IdGenerator";
import { LoginUC } from "../business/usecases/user/login";
import { MatchesUC, MatchUserInput } from "../business/usecases/user/matches";
import { ChangeUserPasswordUC } from "../business/usecases/user/changePassword";
import {
  UnmatchUserUC,
  UnmatchUserInput
} from "../business/usecases/user/unmatch";
import { GetAllMatchesInput, GetAllMatches } from "../business/usecases/user/getAllMatches";

export class ApiRouter {
  public static getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
  };

  public static async handleRoute(path: string, event: any): Promise<any> {
    switch (path) {
      case "getAllUsers":
        const getAllUsersUC = new GetAllUsersUC(new UserDataBase());
        const resultGetAllUsers = await getAllUsersUC.execute();
        return resultGetAllUsers;

      case "createUser":
        const createUserUC = new SignupUC(
          new UserDataBase(),
          new JwtAuthService(),
          new BcryptService(),
          new V4IdGenerator()
        );
        const resultSignup = await createUserUC.execute({
          name: event.body.name,
          email: event.body.email,
          birthday: event.body.birthday,
          age: event.body.age,
          photo: event.body.photo,
          password: event.body.password
        });
        return resultSignup;

      case "login":
        const loginUC = new LoginUC(
          new UserDataBase(),
          new JwtAuthService(),
          new BcryptService()
        );
        const resultLogin = await loginUC.execute(
          event.body.email,
          event.body.password
        );
        return resultLogin;

      case "match":
        const authService = new JwtAuthService();
        const userId = authService.getUserIdFromToken(
          this.getTokenFromHeaders(event.headers)
        );

        const matchUC = new MatchesUC(
          new UserDataBase(),
          new UserDataBase(),
          new UserDataBase()
        );

        const input: MatchUserInput = {
          userToMatch: event.body.userToMatchId,
          userId: userId
        };

        const resultMatch = await matchUC.execute(input);
        return resultMatch;

      case "changePassword":
        const changePasswordUC = new ChangeUserPasswordUC(
          new JwtAuthService(),
          new UserDataBase(),
          new BcryptService(),
          new UserDataBase()
        );

        const resultChangePassword = await changePasswordUC.execute({
          token: this.getTokenFromHeaders(event.headers),
          oldPassword: event.body.oldPassword,
          newPassword: event.body.newPassword
        });

        return resultChangePassword;

      case "unmatch":
        const authServiceUnmatch = new JwtAuthService();
        const userIdUnmatch = authServiceUnmatch.getUserIdFromToken(
          this.getTokenFromHeaders(event.headers)
        );

        const unfollow = new UnmatchUserUC(new UserDataBase());

        const inputUnmatch: UnmatchUserInput = {
          userId: userIdUnmatch,
          userToUnmatch: event.body.userToUnmatch
        };
        const resultUnmatch = await unfollow.execute(inputUnmatch);
        return resultUnmatch;

      case "getAllMatches":
        const authServiceGetMatches = new JwtAuthService();
        const userIdGetMatches = authServiceGetMatches.getUserIdFromToken(
          this.getTokenFromHeaders(event.headers)
        );

        const inputGetMatches: GetAllMatchesInput = {
          userId: userIdGetMatches
        };
        const getAllMatchesUC = new GetAllMatches(new UserDataBase());
				const resultGetAllMatches = await getAllMatchesUC.execute(inputGetMatches);
				return resultGetAllMatches;

      default:
        throw new Error("Rota não existe");
    }
  }
}
