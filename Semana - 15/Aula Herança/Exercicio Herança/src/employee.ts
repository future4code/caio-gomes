export abstract class Employee {
  protected name: string
  protected salary: number
  public numberOfInstances: number

  constructor(name: string, salary: number, numberOfInstances: number){
    this.name = name
    this.salary = salary
    this.numberOfInstances = numberOfInstances
  }

  public abstract sayJob(): void
}