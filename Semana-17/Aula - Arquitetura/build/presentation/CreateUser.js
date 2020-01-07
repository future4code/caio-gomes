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
const CreateUserInteractor_1 = require("../business/usecases/createUser/CreateUserInteractor");
function createUserEndpoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const createUserInput = {
                birthdate: new Date(req.body.birthdate),
                email: req.body.email,
                name: req.body.name,
                nickname: req.body.nickname
            };
            const useCase = new CreateUserInteractor_1.CreateUserInteractor();
            const result = yield useCase.execute(createUserInput);
            res.send(Object.assign(Object.assign({}, result), { success: true, message: 'User created succesfully' }));
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    });
}
exports.createUserEndpoint = createUserEndpoint;
