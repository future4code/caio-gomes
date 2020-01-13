export interface CryptoGateway {
    encrypt(word: string): Promise<string>
}