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
class GetAllUsersUC {
    constructor(getAllUsersGateway) {
        this.getAllUsersGateway = getAllUsersGateway;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.getAllUsersGateway.getAllUsers();
            return {
                users: users.map(user => ({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    birthday: user.getBirthday(),
                    photo: user.getPhoto(),
                    password: user.getPassword()
                }))
            };
        });
    }
}
exports.GetAllUsersUC = GetAllUsersUC;
