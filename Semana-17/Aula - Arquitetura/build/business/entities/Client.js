"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(id, name, email, dateOrder, paymentMethod) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.dateOrder = dateOrder;
        this.paymentMethod = paymentMethod;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getDateOrder() {
        return this.dateOrder;
    }
    getPaymentMethod() {
        return this.paymentMethod;
    }
}
exports.Client = Client;
