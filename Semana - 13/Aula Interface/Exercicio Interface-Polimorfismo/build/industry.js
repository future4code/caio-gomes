"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const place_1 = require("./place");
class Industry extends place_1.Place {
    constructor(industryName, industryNumber, cep) {
        super(cep);
        this.industryName = industryName;
        this.industryNumber = industryNumber;
    }
}
exports.Industry = Industry;
//# sourceMappingURL=industry.js.map