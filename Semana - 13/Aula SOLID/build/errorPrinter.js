"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorPrinter {
    onError(error, date) {
        console.log(error, ' - ', date.utcOffset('-0300').format('DD/MM/YYYY HH:mm'));
    }
}
exports.ErrorPrinter = ErrorPrinter;
//# sourceMappingURL=errorPrinter.js.map