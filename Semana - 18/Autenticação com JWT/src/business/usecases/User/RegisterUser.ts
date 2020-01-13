import { CryptoGateway } from './../../gateways/CryptoGateway';
import { User } from './../../entities/User';
import { RegisterUserGateway } from "../../gateways/RegisterGateway";


export class RegisterUserUC {
    constructor(
        private registerUserGateway: RegisterUserGateway,
        private cryptoGateway: CryptoGateway
    ) {}
    
    async execute(input: RegisterUserInput): Promise<RegisterUserOutput> {
        if(input.password.length < 6){
            throw new Error('Password must be at least 6 characters long!')
        }

        const encryptedPassword = await this.cryptoGateway.encrypt(input.password)
        
        await this.registerUserGateway.createUser(new User(
            input.email,
            encryptedPassword
        )); 
        
        return {
            message: "User created successfully!"
        }
    } 
}

export interface RegisterUserInput {
    email: string;
    password: string;
}

export interface RegisterUserOutput {
    message: string
}

