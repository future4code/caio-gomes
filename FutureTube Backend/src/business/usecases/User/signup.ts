import { User } from "./../../entities/User";
import { SignupGateway } from "./../../gateways/users/UserGateway";
import { UserTokenGateway } from "./../../gateways/auth/userTokenGateway";
import { CryptographyGateway } from "./../../gateways/cryptography/cryptoGateway";
import { IdGeneratorGateway } from "./../../gateways/auth/idGenerator";

export class SignupUC {
  constructor(
    private signupGateway: SignupGateway,
    private userTokenGateway: UserTokenGateway,
    private cryptoGateway: CryptographyGateway,
    private idGenerator: IdGeneratorGateway
  ) {}

  async execute(input: SignupInput): Promise<SignupOutput> {
    const encryptedPassword = await this.cryptoGateway.encrypt(input.password);
    const user = new User(
    this.idGenerator.generateId(),
     input.firstName,
     input.lastName,
     input.email,
     input.photo,
     input.birthday,
     encryptedPassword,
    );
    const comparedPassword = await this.cryptoGateway.compare(
      input.password,
      user.getPassword()
    );
    if (!comparedPassword) {
      throw new Error("Invalid password");
    }
    await this.signupGateway.createUser(user);

    return {
      token: this.userTokenGateway.generateToken(user.getId()),
      message: "User created successfully!"
    };
  }
}

export interface SignupInput {
  firstName: string;
  lastName: string;
  email: string;
  birthday: Date;
  photo: string;
  password: string;
}

export interface SignupOutput {
  token: string;
  message: string;
}