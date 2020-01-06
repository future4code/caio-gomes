"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(photo, size, paper, borderType, borderSize, borderColor) {
        this.photo = photo;
        this.size = size;
        this.paper = paper;
        this.borderType = borderType;
        this.borderSize = borderSize;
        this.borderColor = borderColor;
    }
    getPhoto() {
        return this.photo;
    }
    getSize() {
        return this.size;
    }
    getPaper() {
        return this.paper;
    }
    getBorderType() {
        return this.borderType;
    }
    getBorderSize() {
        return this.borderSize;
    }
    getBorderColor() {
        return this.borderColor;
    }
}
exports.Order = Order;
