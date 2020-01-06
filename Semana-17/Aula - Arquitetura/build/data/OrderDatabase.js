"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = require("./../business/entities/Order");
const knex_1 = __importDefault(require("knex"));
class OrderModel {
    constructor(photo, size, paper, borderType, borderSize, borderColor) {
        this.photo = photo;
        this.size = size;
        this.paper = paper;
        this.borderType = borderType;
        this.borderSize = borderSize;
        this.borderColor = borderColor;
    }
}
class OrderEntityMapper {
    entityToModel(entity) {
        return {
            photo: entity.getPhoto(),
            size: entity.getSize(),
            paper: entity.getPaper(),
            borderType: entity.getBorderType(),
            borderSize: entity.getBorderSize(),
            borderColor: entity.getBorderColor()
        };
    }
    modelToENtity(model) {
        return new Order_1.Order(model.photo, model.size, model.paper, model.borderType, model.borderSize, model.borderColor);
    }
}
class OrderDatabase {
    constructor() {
        this.connection = knex_1.default({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'caio',
                password: process.env.SENHA_BANCO,
                database: 'caio'
            }
        });
        this.orderEntityMapper = new OrderEntityMapper();
    }
    teste() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection
                .select()
                .from('paper_type')
                .then(res => {
                return (res);
            });
        });
    }
}
exports.OrderDatabase = OrderDatabase;
