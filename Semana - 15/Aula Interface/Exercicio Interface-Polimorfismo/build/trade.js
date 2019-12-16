"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const place_1 = require("./place");
class Trade extends place_1.Place {
    constructor(name, cnpj, cep) {
        super(cep);
        this.name = name;
        this.cnpj = cnpj;
    }
}
exports.Trade = Trade;
//# sourceMappingURL=trade.js.map