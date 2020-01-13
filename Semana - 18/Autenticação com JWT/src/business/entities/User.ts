export class User {
    constructor(
        private email: string,
        private password: string
    ){}

    public registerNewUser(){
        const newUser = {
            email: this.email,
            password: this.password
        }
        return newUser;
    }
}