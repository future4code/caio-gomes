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
const createOrderInteractor_1 = require("./../business/usecases/createOrder/createOrderInteractor");
function createOrderEndpoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const createClientInput = {
                photo: req.body.photo,
                size: req.body.size,
                paper: req.body.paper,
                borderType: req.body.borderType,
                borderSize: req.body.borderSize,
                borderColor: req.body.borderColor
            };
            const useCase = new createOrderInteractor_1.CreateOrderInteractor();
            const result = yield useCase.execute(createClientInput);
            res.send({
                result,
                success: true,
                message: 'Order created succesfully'
            });
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    });
}
exports.createOrderEndpoint = createOrderEndpoint;
