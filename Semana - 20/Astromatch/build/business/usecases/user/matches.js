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
class MatchesUC {
    constructor(matchUserGateway, verifyUserExistsGateway, verifyRelationGateway) {
        this.matchUserGateway = matchUserGateway;
        this.verifyUserExistsGateway = verifyUserExistsGateway;
        this.verifyRelationGateway = verifyRelationGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.verifyUserExistsGateway.verifyUserExists(input.userId);
            const relationsExists = yield this.verifyRelationGateway.verifyMatchExists(input.userId, input.userToMatch);
            if (!relationsExists) {
                yield this.matchUserGateway.createMatch(input.userId, input.userToMatch);
                return {
                    message: "User matched Successfuly"
                };
            }
            throw new Error("User is already a match!");
        });
    }
}
exports.MatchesUC = MatchesUC;
