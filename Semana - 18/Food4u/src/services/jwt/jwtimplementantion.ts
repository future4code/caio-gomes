import * as jwt from 'jsonwebtoken'
import { AuthenticationGateway } from '../../business/gateways/Auth/authenticationGateway';


export class JwtImplementation implements AuthenticationGateway{ 
     
    private getJwtSecretKey(): string {
        if(!process.env.JWT_SECRET){
            throw new Error("Missing JWT secret key")
        }
        return process.env.JWT_SECRET
    }
    
    generateToken(userId: string): string {
      return jwt.sign(
           { userId }, 
           this.getJwtSecretKey()
       ) 
    }

    getUserIDfromToken(token: string): string {
        const jwtData = jwt.verify(token, this.getJwtSecretKey()) as JwtData
        return jwtData.userID
    }
}

interface JwtData {
    userID: string
    iat: number
    exp: number
}