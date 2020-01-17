"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Recipe {
    constructor(title, description, userId, creationdate = new Date()) {
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.creationdate = creationdate;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getUserId() {
        return this.userId;
    }
    getCreationDate() {
        return this.creationdate;
    }
}
exports.Recipe = Recipe;
