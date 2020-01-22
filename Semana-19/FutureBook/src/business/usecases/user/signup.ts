import { SignupGateway, LoginGateway } from "../../gateways/UserGateways";
import { CryptographyGateway } from "../../gateways/cryptography/cryptoGateway";
import { IdGeneratorGateway } from "../../gateways/auth/idGenerator";
import { User } from "../../entities/User";
import { UserTokenGateway } from "../../gateways/auth/userTokenGateway";

export class SignupUC {
    constructor(
        private signupGateway: SignupGateway,
        private userTokenGateway: UserTokenGateway,
        private cryptoGateway: CryptographyGateway,
        private idGenerator: IdGeneratorGateway
    ){}

    async execute(input: SignupInput): Promise<SignupOutput> {
        const encryptedPassword = await this.cryptoGateway.encrypt(input.password)
        const user = new User(
            this.idGenerator.generateId(),
            input.name,
            input.email,
            encryptedPassword
            )
        const comparedPassword = await this.cryptoGateway.compare(input.password, user.getPassword())
        if (!comparedPassword) {
            throw new Error("Invalid password");
          }
        await this.signupGateway.createUser(user);

        return {
            token: this.userTokenGateway.generateToken(user.getId()),
            message: "User created successfully!"
        }
    }
}

export interface SignupInput {
    name: string;
    email: string;
    password: string;
}

export interface SignupOutput{
   token: string;
   message: string
}