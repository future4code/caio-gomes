"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Frame {
    constructor(size, type) {
        if (!(size in FrameSize)) {
            throw new Error('Tamanho moldura invalido');
        }
        if (!(type in FrameType)) {
            throw new Error('Tipo moldura invalido');
        }
        this.size = size;
        this.type = type;
    }
    calculateFrameSizePrice(size) {
        switch (size) {
            case 'PEQUENA':
                return 0.25;
            case 'MEDIA':
                return 0.5;
            case 'GRANDE':
                return 0.75;
            default:
                return 0;
        }
    }
    calculateFrameTypePrice(type) {
        switch (type) {
            case 'CRUA':
                return 15.0;
            case 'LISA':
                return 32.0;
            case 'CLASSICA':
                return 43.0;
            case 'VINTAGE':
                return 52.5;
            case 'MADEIRA':
                return 60.0;
            default:
                return 0;
        }
    }
    calculateTotalFramePrice() {
        return (this.calculateFrameSizePrice(this.size) *
            this.calculateFrameTypePrice(this.type));
    }
}
exports.Frame = Frame;
var FrameSize;
(function (FrameSize) {
    FrameSize["PEQUENA"] = "PEQUENA";
    FrameSize["MEDIA"] = "MEDIA";
    FrameSize["GRANDE"] = "GRANDE";
})(FrameSize = exports.FrameSize || (exports.FrameSize = {}));
var FrameType;
(function (FrameType) {
    FrameType["CRUA"] = "CRUA";
    FrameType["LISA"] = "LISA";
    FrameType["CLASSICA"] = "CLASSICA";
    FrameType["VINTAGE"] = "VINTAGE";
    FrameType["MADEIRA"] = "MADEIRA";
})(FrameType = exports.FrameType || (exports.FrameType = {}));
