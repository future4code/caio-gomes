/*import { SignupUC } from "../business/usecases/User/signup";
import { UserDataBase } from "../data/User/userDatabase";
import { JwtAuthService } from "../services/Auth/jwtAuthentication";
import { BcryptService } from "../services/Cryptography/bcrypt";
import { V4IdGenerator } from "../services/Auth/v4IdGenerator";

export class ApiRouter {
  public static getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
  };

  public static async handleRoute(path: string, event: any): Promise<any> {
    switch (path) {
      case "createUser":
        const signup = new SignupUC(
          new UserDataBase(),
          new JwtAuthService(),
          new BcryptService(),
          new V4IdGenerator()
        );

        const {
          firstName,
          lastName,
          email,
          birthday,
          photo,
          password
        } = event.body;

        const result = await signup.execute({
          firstName,
          lastName,
          email,
          birthday,
          photo,
          password
				});
				
				return result;
				
      default:
        throw new Error("Rota não existe");
    }
  }
}
*/