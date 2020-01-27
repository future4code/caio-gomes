"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(paper, frame, client, id) {
        this.paper = paper;
        this.frame = frame;
        this.client = client;
    }
    getId() {
        return this.id;
    }
    calculatePaperPrice() {
        return this.paper.calculateTotalPaperPrice();
    }
    calculateFramePrice() {
        return this.frame.calculateTotalFramePrice();
    }
    calculateTotalPrice() {
        return (this.paper.calculateTotalPaperPrice() +
            this.frame.calculateTotalFramePrice());
    }
}
exports.Order = Order;
