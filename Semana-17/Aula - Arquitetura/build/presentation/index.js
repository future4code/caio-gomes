"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SimulateOrderUseCase_1 = require("./../business/usecases/SimulateOrder/SimulateOrderUseCase");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post('/pedido/simular', (req, res) => {
    const useCase = new SimulateOrderUseCase_1.SimulateOrderUseCase();
    const input = {
        paper: {
            size: req.body.paperSize,
            type: req.body.paperType
        },
        frame: {
            size: req.body.frameSize,
            type: req.body.frameType
        }
    };
    const result = useCase.execute(input);
    res.send({
        pricePaper: formatValue(result.pricePaper),
        priceFrame: formatValue(result.priceFrame),
        total: formatValue(result.total)
    });
});
function formatValue(number) {
    return `R$${number.toFixed(2)}`;
}
exports.default = app;
