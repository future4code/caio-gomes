export class User {
    constructor(
        private email: string,
        private password_user: string
    ){}

    public registerNewUser(){
        const newUser = {
            email: this.email,
            password: this.password_user
        }
        return newUser;
    }
}