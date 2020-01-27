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
const GetTasksByUserInteractor_1 = require("../business/usecases/getTasksByUser/GetTasksByUserInteractor");
function getTaskByUserEndpoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getTasksInput = {
                userId: req.params.userId
            };
            const useCase = new GetTasksByUserInteractor_1.GetTasksByUserInteractor();
            console.log('ID', req.params.userId);
            const result = yield useCase.execute(getTasksInput);
            res.send(Object.assign({}, result));
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    });
}
exports.getTaskByUserEndpoint = getTaskByUserEndpoint;
function getBorder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.getBorder = getBorder;
