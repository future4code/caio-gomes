import * as bcrypt from "bcrypt";
import { CryptographyGateway } from "../../business/gateways/cryptography/cryptoGateway";

export class BcryptService implements CryptographyGateway {
  private static BCRYPT_SALTS_ROUND = 10;

  async encrypt(word: string): Promise<string> {
    const generatedSalt = await bcrypt.genSalt(
      BcryptService.BCRYPT_SALTS_ROUND
    );
    const result = await bcrypt.hash(word, generatedSalt);
    return result;
  }

  async compare(word: string, hash: string): Promise<boolean> {
    return bcrypt.compare(word, hash);
  }
}
