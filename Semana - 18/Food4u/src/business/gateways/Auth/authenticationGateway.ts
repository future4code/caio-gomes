export interface AuthenticationGateway {
    generateToken(userId: string): string,
    getUserIDfromToken(token: string): string;
}