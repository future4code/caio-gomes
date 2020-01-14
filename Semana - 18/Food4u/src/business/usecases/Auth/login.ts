import { UserGateway } from '../../gateways/User/userGateway';
import { AuthenticationGateway } from '../../gateways/Auth/authenticationGateway';
import { CryptoGateway } from '../../gateways/Crypto/cryptoGateway';

export class LoginUC {
    constructor(
        private userGateway: UserGateway,
        private cryptoGateway: CryptoGateway,
        private authGateway: AuthenticationGateway
    ){}
        
    async execute(email: string, password: string): Promise<LoginUCOutput> {
        const user = await this.userGateway.login(email);
        console.log('user', user[0].password_user)
        const isPassowrdRight = await this.cryptoGateway.compare(
            password,
            user[0].password_user
            )
            
            if(!isPassowrdRight){
                throw new Error("Email or Password are invalid");
            }

            const token = this.authGateway.generateToken(user);
            console.log('token', token)

        return {
            token
        }
    }
}

interface LoginUCOutput {
    token: string
}