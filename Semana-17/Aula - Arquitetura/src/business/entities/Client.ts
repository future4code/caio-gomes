export class Client {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private dateOrder: Date,
    private paymentMethod: string
  ) {}

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getDateOrder() {
    return this.dateOrder;
  }

  public getPaymentMethod() {
    return this.paymentMethod;
  }
}
