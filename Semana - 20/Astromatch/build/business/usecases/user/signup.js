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
class SignupUC {
    constructor(signupGateway, userTokenGateway, cryptoGateway, idGenerator) {
        this.signupGateway = signupGateway;
        this.userTokenGateway = userTokenGateway;
        this.cryptoGateway = cryptoGateway;
        this.idGenerator = idGenerator;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const encryptedPassword = yield this.cryptoGateway.encrypt(input.password);
            const user = new User_1.User(this.idGenerator.generateId(), input.name, input.email, input.birthday, input.age, input.photo, encryptedPassword);
            const comparedPassword = yield this.cryptoGateway.compare(input.password, user.getPassword());
            if (!comparedPassword) {
                throw new Error("Invalid password");
            }
            yield this.signupGateway.createUser(user);
            return {
                token: this.userTokenGateway.generateToken(user.getId()),
                message: "User created successfully!"
            };
        });
    }
}
exports.SignupUC = SignupUC;
