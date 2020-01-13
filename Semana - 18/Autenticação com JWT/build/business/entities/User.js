"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    registerNewUser() {
        const newUser = {
            email: this.email,
            password: this.password
        };
        return newUser;
    }
}
exports.User = User;
