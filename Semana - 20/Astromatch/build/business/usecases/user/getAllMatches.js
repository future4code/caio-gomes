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
class GetAllMatches {
    constructor(getAllMatchesGateway) {
        this.getAllMatchesGateway = getAllMatchesGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.getAllMatchesGateway.getAllMatches(input.userId);
            return {
                users: users.map(user => ({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    birthday: user.getBirthday(),
                    age: user.getAge(),
                    photo: user.getPhoto()
                }))
            };
        });
    }
}
exports.GetAllMatches = GetAllMatches;
