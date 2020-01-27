"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, email, birthday, photo, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthday = birthday;
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
    getPhoto() {
        return this.photo;
    }
    getPassword() {
        return this.password;
    }
}
exports.User = User;
