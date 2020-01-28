"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ChangeUserPasswordUC {
    constructor(userTokenGateway, updatePassword, getUserById, cryptographyGateway) {
        this.userTokenGateway = userTokenGateway;
        this.updatePassword = updatePassword;
        this.getUserById = getUserById;
        this.cryptographyGateway = cryptographyGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = this.userTokenGateway.getUserIdFromToken(input.token);
            const user = yield this.getUserById.getUserById(userId);
            const comparedPassword = yield this.cryptographyGateway.compare(input.oldPassword, user.getPassword());
            if (!comparedPassword) {
                throw new Error("Incorret password");
            }
            const encryptedNewPassword = yield this.cryptographyGateway.encrypt(input.newPassword);
            yield this.updatePassword.updatePassword(user.getId(), encryptedNewPassword);
            return {
                token: this.userTokenGateway.generateToken(user.getId())
            };
        });
    }
}
exports.ChangeUserPasswordUC = ChangeUserPasswordUC;
