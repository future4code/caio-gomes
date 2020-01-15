"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class LoginUC {
    constructor(userGateway, cryptoGateway, authGateway) {
        this.userGateway = userGateway;
        this.cryptoGateway = cryptoGateway;
        this.authGateway = authGateway;
    }
    execute(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userGateway.login(email);
            console.log('user', user[0].password_user);
            const isPassowrdRight = yield this.cryptoGateway.compare(password, user[0].password_user);
            if (!isPassowrdRight) {
                throw new Error("Email or Password are invalid");
            }
            const token = this.authGateway.generateToken(user);
            console.log('token', token);
            return {
                token
            };
        });
    }
}
exports.LoginUC = LoginUC;
