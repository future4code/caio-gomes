"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const User_1 = require("../business/entities/User");
class UserDataBase {
    constructor() {
        this.connection = knex_1.default({
            client: "mysql",
            connection: {
                host: "34.235.170.75",
                user: "caio",
                password: process.env.DB_TOKEN,
                database: "astromatch"
            }
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.connection("users").insert(user);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection("users")
                .select("*")
                .where("email", email);
            const returnedUser = query[0];
            if (!returnedUser) {
                throw new Error("User not found!");
            }
            return new User_1.User(returnedUser.id, returnedUser.name, returnedUser.email, returnedUser.birthday, returnedUser.photo, returnedUser.password);
        });
    }
    ;
    updatePassword(id, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`UPDATE Users SET password='${newPassword}' WHERE id=${id};`);
        });
    }
    ;
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.connection.raw("SELECT * FROM users;");
            const usersFromDb = yield query;
            return usersFromDb[0].map((user) => new User_1.User(user.id, user.name, user.email, user.birthday, user.photo, user.password));
        });
    }
}
exports.UserDataBase = UserDataBase;
