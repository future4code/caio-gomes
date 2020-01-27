export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birthday: Date,
        private photo: string,
        private password: string
    ){}

    getId(): string {
        return this.id;
      }

    getName(): string {
        return this.name
    }

    getEmail():string {
        return this.email
    }

    getBirthday(): Date {
        return this.birthday
    }

    getPhoto(): string {
        return this.photo
    }

    getPassword():string {
        return this.password
    }
}