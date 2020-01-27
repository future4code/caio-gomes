import { Frame } from './Frame';
import { Client } from './Client';
import { Paper } from './Paper';

export class Order {
  id?: string;
  private paper: Paper;
  private frame: Frame;
  private client?: Client;

  constructor(paper: Paper, frame: Frame, client?: Client, id?: string) {
    this.paper = paper;
    this.frame = frame;
    this.client = client;
  }

  public getId() {
    return this.id;
  }

  public calculatePaperPrice() {
    return this.paper.calculateTotalPaperPrice();
  }

  public calculateFramePrice() {
    return this.frame.calculateTotalFramePrice();
  }

  public calculateTotalPrice() {
    return (
      this.paper.calculateTotalPaperPrice() +
      this.frame.calculateTotalFramePrice()
    );
  }
}
