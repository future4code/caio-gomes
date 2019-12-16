"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
class MobileMission extends mission_1.Mission {
    constructor(classNumber, startDate, endDate, listStudents, listTeachers) {
        super(startDate, endDate, listStudents, listTeachers);
        this.classNumber = classNumber;
        this.startDate = startDate;
        this.endDate = endDate;
        this.listStudents = listStudents;
        this.listTeachers = listTeachers;
    }
}
exports.MobileMission = MobileMission;
//# sourceMappingURL=mobileMission.js.map