export class User {
  constructor(
    private id: string,
    private firstName: string,
    private lastName: string,
    private email: string,
    private photo: string,
    private birthday: Date,
    private password: string,
  ) {}

  public getId(): string {
    return this.id;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getEmail(): string {
    return this.email;
  }

  public getBirthday(): Date {
    return this.birthday;
  }

  public getPhoto(): string {
    return this.photo;
  }

  public getPassword(): string {
    return this.password;
  }
}
