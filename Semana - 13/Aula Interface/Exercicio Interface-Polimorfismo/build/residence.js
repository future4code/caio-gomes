"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const place_1 = require("./place");
class Residence extends place_1.Place {
    constructor(name, cpf, cep) {
        super(cep);
        this.name = name;
        this.cpf = cpf;
    }
}
exports.Residence = Residence;
//# sourceMappingURL=residence.js.map