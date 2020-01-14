import { UserGateway } from '../../gateways/User/userGateway';
import { CryptoGateway } from '../../gateways/Crypto/cryptoGateway';
import { User } from '../../entities/User';

export class RegisterUserUC {
    constructor(
        private registerUserGateway: UserGateway,
        private cryptoGateway: CryptoGateway
    ) {}
    
    async execute(input: RegisterUserInput): Promise<RegisterUserOutput> {
        if(input.password_user.length < 6){
            throw new Error('Password must be at least 6 characters long!')
        }
 
        const encryptedPassword = await this.cryptoGateway.encrypt(input.password_user)
        
        await this.registerUserGateway.signup(new User(
            0,
            input.name,
            input.age,
            input.email,
            encryptedPassword
        )); 
        
        return {
            message: "User created successfully!"
        }
    } 
}

export interface RegisterUserInput {
    name: string;
    age:number
    email: string;
    password_user: string;
}

export interface RegisterUserOutput {
    message: string
}

