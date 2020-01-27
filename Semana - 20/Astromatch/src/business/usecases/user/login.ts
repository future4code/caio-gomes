import { LoginGateway } from "../../gateways/UserGateway";
import { UserTokenGateway } from "../../gateways/auth/userTokenGateway";
import { CryptographyGateway } from "../../gateways/cryptography/cryptoGateway";

export class LoginUC {
  constructor(
    private loginGateway: LoginGateway,
    private userTokenGateway: UserTokenGateway,
    private cryptoGateway: CryptographyGateway
  ) {}
  async execute(email: string, password: string): Promise<loginOutput> {
    const user = await this.loginGateway.getUserByEmail(email);
    const comparedPassword = await this.cryptoGateway.compare(
      password,
      user.getPassword()
    );
    if (!comparedPassword) {
      throw new Error("Invalid Password!");
    }
    return {
      token: this.userTokenGateway.generateToken(user.getId())
    };
  }
}

export interface loginOutput {
  token: string;
}
