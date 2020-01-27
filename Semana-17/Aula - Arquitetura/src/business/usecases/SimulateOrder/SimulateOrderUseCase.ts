import { Paper } from '../../entities/Paper';
import { Frame } from '../../entities/Frame';
import { Order } from '../../entities/Order';

export class SimulateOrderUseCase {
  execute(input: SimulateOrderInput): SimulateOrderOutput {
    const paper = new Paper(input.paper.size, input.paper.type);
    const frame = new Frame(input.frame.size, input.frame.type);
    const order = new Order(paper, frame);

    return {
      pricePaper: order.calculatePaperPrice(),
      priceFrame: order.calculateFramePrice(),
      total: order.calculateTotalPrice()
    };
  }
}

export interface SimulateOrderInput {
  paper: {
    size: string;
    type: string;
  };
  frame: {
    type: string;
    size: string;
  };
}

export interface SimulateOrderOutput {
  pricePaper: number;
  priceFrame: number;
  total: number;
}
