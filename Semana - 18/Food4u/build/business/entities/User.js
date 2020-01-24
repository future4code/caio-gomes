"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, age, email, password_user) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.password_user = password_user;
    }
    getPassword() {
        return this.password_user;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
exports.User = User;
