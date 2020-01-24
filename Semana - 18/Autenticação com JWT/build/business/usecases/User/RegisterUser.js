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
const User_1 = require("./../../entities/User");
class RegisterUserUC {
    constructor(registerUserGateway, cryptoGateway) {
        this.registerUserGateway = registerUserGateway;
        this.cryptoGateway = cryptoGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (input.password.length < 6) {
                throw new Error('Password must be at least 6 characters long!');
            }
            const encryptedPassword = yield this.cryptoGateway.encrypt(input.password);
            yield this.registerUserGateway.createUser(new User_1.User(input.email, encryptedPassword));
            return {
                message: "User created successfully!"
            };
        });
    }
}
exports.RegisterUserUC = RegisterUserUC;
