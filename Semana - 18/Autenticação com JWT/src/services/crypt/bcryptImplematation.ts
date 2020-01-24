import { CryptoGateway } from './../../business/gateways/Crypto/CryptoGateway';
import * as bcrypt from 'bcrypt'

export class BcryptImplemantation implements CryptoGateway {
    private static BCRYPT_SALT_ROUNDS = 10
    
    async encrypt(word: string): Promise<string>{
        const salt = await bcrypt.genSalt(BcryptImplemantation.BCRYPT_SALT_ROUNDS);
        const encryptedWord = await bcrypt.hash(
            word,
            salt
        )
        return encryptedWord;
    }

    async compare(word: string, hash: string): Promise<boolean>{
        return await bcrypt.compare(word, hash)
    }
}