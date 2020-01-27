"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Paper {
    constructor(size, type) {
        if (!(size in PaperSize)) {
            throw new Error('Tamanho de papel inválido');
        }
        if (!(type in PaperType)) {
            throw new Error('Tipo de papel inválido');
        }
        this.size = size;
        this.type = type;
    }
    calculatePaperSizePrice(size) {
        switch (size) {
            case '13x18':
                return 20.0;
            case '21x30':
                return 27.8;
            case '30x30':
                return 35.4;
            case '30x42':
                return 42.3;
            case '42x60':
                return 55.6;
            default:
                return 0;
        }
    }
    calculatePaperTypePrice(type) {
        switch (type) {
            case 'BRILHANTE':
                return 1;
            case 'FOSCO':
                return 1.05;
            case 'FIBRA':
                return 1.12;
            case 'RESINADO':
                return 1.42;
            case 'PEROLA':
                return 1.53;
            default:
                return 0;
        }
    }
    calculateTotalPaperPrice() {
        return (this.calculatePaperSizePrice(this.size) *
            this.calculatePaperTypePrice(this.type));
    }
}
exports.Paper = Paper;
var PaperSize;
(function (PaperSize) {
    PaperSize["13x18"] = "13x18";
    PaperSize["21x30"] = "21x30";
    PaperSize["30x30"] = "30x30";
    PaperSize["30x42"] = "30x42";
    PaperSize["42x60"] = "42x60";
})(PaperSize = exports.PaperSize || (exports.PaperSize = {}));
var PaperType;
(function (PaperType) {
    PaperType["BRILHANTE"] = "BRILHANTE";
    PaperType["FOSCO"] = "FOSCO";
    PaperType["FIBRA"] = "FIBRA";
    PaperType["RESINADO"] = "RESINADO";
    PaperType["PEROLA"] = "PEROLA";
})(PaperType = exports.PaperType || (exports.PaperType = {}));
