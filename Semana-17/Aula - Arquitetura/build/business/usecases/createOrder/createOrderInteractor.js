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
const OrderDatabase_1 = require("./../../../data/OrderDatabase");
const Order_1 = require("./../../entities/Order");
class CreateOrderInteractor {
    constructor() {
        this.orderDatabase = new OrderDatabase_1.OrderDatabase();
    }
    execute(createOrderInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const newOrder = new Order_1.Order(createOrderInput.photo, createOrderInput.size, createOrderInput.paper, createOrderInput.borderType, createOrderInput.borderSize, createOrderInput.borderColor);
            yield this.orderDatabase.createOrder(newOrder);
        });
    }
}
exports.CreateOrderInteractor = CreateOrderInteractor;
