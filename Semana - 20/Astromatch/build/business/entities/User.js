"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, email, birthday, age, photo, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.age = age;
        this.photo = photo;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getBirthday() {
        return this.birthday;
    }
    getAge() {
        return this.age;
    }
    getPhoto() {
        return this.photo;
    }
    getPassword() {
        return this.password;
    }
}
exports.User = User;
