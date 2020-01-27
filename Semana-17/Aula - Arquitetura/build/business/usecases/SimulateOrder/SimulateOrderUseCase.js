"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Paper_1 = require("../../entities/Paper");
const Frame_1 = require("../../entities/Frame");
const Order_1 = require("../../entities/Order");
class SimulateOrderUseCase {
    execute(input) {
        const paper = new Paper_1.Paper(input.paper.size, input.paper.type);
        const frame = new Frame_1.Frame(input.frame.size, input.frame.type);
        const order = new Order_1.Order(paper, frame);
        return {
            pricePaper: order.calculatePaperPrice(),
            priceFrame: order.calculateFramePrice(),
            total: order.calculateTotalPrice()
        };
    }
}
exports.SimulateOrderUseCase = SimulateOrderUseCase;
