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
class GetProfileUC {
    constructor(userGateway, authGateway) {
        this.userGateway = userGateway;
        this.authGateway = authGateway;
    }
    execute(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = this.authGateway.getUserIDfromToken(token);
            const user = yield this.userGateway.profile(userID);
            return {
                id: user.getId().toString(),
                name: user.getName(),
                age: user.getAge(),
                email: user.getEmail()
            };
        });
    }
}
exports.GetProfileUC = GetProfileUC;
