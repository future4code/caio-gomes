import { Dish } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(name,price, cost, ingredients, timeToCook);
  }

  public cook(): void {
    console.log("Starting Salty Dish")
  }
}

export const feijoada = new SaltyDish("Feijoada", 100, 20, ["Orelha de porco", "linguiça"], 100);
export const lasanha = new SaltyDish("Lasanha", 40, 15, ["Massa Fresca", "Molho Bolonhesa", "Queijo"], 2)