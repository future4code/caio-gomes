export class User {
    constructor(
        private name: string,
        private email: string,
        private password: any
    ){}

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }
}