import { UpdatePasswordGateway, GetUserByIdGateway } from '../../gateways/UserGateway';
import { UserTokenGateway } from "../../gateways/auth/userTokenGateway";
import { CryptographyGateway } from "../../gateways/cryptography/cryptoGateway";

export class ChangeUserPasswordUC {
  constructor(
    private userTokenGateway: UserTokenGateway,
    private updatePassword: UpdatePasswordGateway,
    private cryptographyGateway: CryptographyGateway,
    private getUserById: GetUserByIdGateway,
  ) {}

  async execute(input: ChangeUserPasswordUCInput): Promise<ChangeUserPasswordUCOutput> {
    const userId = this.userTokenGateway.getUserIdFromToken(input.token);
    const user = await this.getUserById.getUserById(userId);
    const comparedPassword = await this.cryptographyGateway.compare(
      input.oldPassword,
      user.getPassword()
    );
    if (!comparedPassword) {
      throw new Error("Incorret password");
    }

    const encryptedNewPassword = await this.cryptographyGateway.encrypt(
      input.newPassword
    );
    await this.updatePassword.updatePassword(user.getId(), encryptedNewPassword);
    return {
      token: this.userTokenGateway.generateToken(user.getId())
    };
  }
}

export interface ChangeUserPasswordUCInput {
  token: string;
  oldPassword: string;
  newPassword: string;
}

export interface ChangeUserPasswordUCOutput {
  token: string;
}