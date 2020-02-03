export class User {
  constructor(
    private name: string,
    private email: string,
    private birthday: Date,
    private photo: string,
    private password: string
  ) {}

    public getName(): string {
        return this.name
    }
    
    public getEmail(): string {
        return this.email
    }

    public getBrithday(): Date {
        return this.birthday
    }

    public getPhoto(): string {
        return this.photo
    }

    public getPassword(): string {
        return this.password
    }
}
