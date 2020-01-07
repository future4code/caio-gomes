import express, { Request, Response } from 'express';
import {
  SimulateOrderInput,
  SimulateOrderUseCase
} from '../business/usecases/simulateOrder/SimulateOrderUseCase';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post('/pedido/simular', (req: Request, res: Response) => {
  const useCase = new SimulateOrderUseCase();

  const input: SimulateOrderInput = {
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

function formatValue(number: number): string {
  return `R$${number.toFixed(2)}`;
}

export default app;
