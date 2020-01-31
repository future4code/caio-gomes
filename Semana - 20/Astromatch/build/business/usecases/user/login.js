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
    constructor(loginGateway, userTokenGateway, cryptoGateway) {
        this.loginGateway = loginGateway;
        this.userTokenGateway = userTokenGateway;
        this.cryptoGateway = cryptoGateway;
    }
    execute(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.loginGateway.getUserByEmail(email);
            const comparedPassword = yield this.cryptoGateway.compare(password, user.getPassword());
            if (!comparedPassword) {
                throw new Error("Invalid Password!");
            }
            return {
                token: this.userTokenGateway.generateToken(user.getId())
            };
        });
    }
}
exports.LoginUC = LoginUC;
