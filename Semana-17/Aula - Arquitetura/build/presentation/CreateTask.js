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
const CreateTaskInteractor_1 = require("../business/usecases/createTask/CreateTaskInteractor");
function createTaskEndpoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const createUserInput = {
                description: req.body.description,
                limitDate: new Date(req.body.limitDate),
                requestingUserId: req.body.requestingUserId,
                responsibleUserId: req.body.responsibleUserId
            };
            const useCase = new CreateTaskInteractor_1.CreateTaskInteractor();
            const result = yield useCase.execute(createUserInput);
            res.send(Object.assign(Object.assign({}, result), { success: true, message: 'Task created succesfully' }));
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    });
}
exports.createTaskEndpoint = createTaskEndpoint;
