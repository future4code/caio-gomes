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
const Paper_1 = require("../../entities/Paper");
const Frame_1 = require("../../entities/Frame");
const Order_1 = require("../../entities/Order");
const Client_1 = require("../../entities/Client");
const OrderDB_1 = require("../../../data/OrderDB");
const uuid_1 = require("uuid");
function generateId() {
    return uuid_1.v4();
}
class CreateOrderUseCase {
    constructor() {
        this.orderDataBase = new OrderDB_1.OrderDB();
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const paper = new Paper_1.Paper(input.paper.size, input.paper.type);
            const frame = new Frame_1.Frame(input.frame.size, input.frame.type);
            const client = new Client_1.Client(input.client.name, input.client.email);
            const order = new Order_1.Order(paper, frame, client, generateId());
            yield this.orderDataBase.saveOrder(order);
            return {
                paperPrice: order.calculatePaperPrice(),
                paperFrame: order.calculateFramePrice(),
                total: order.calculateTotalPrice()
            };
        });
    }
}
exports.CreateOrderUseCase = CreateOrderUseCase;
