"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
class WebMission extends mission_1.Mission {
    constructor(patron, startDate, endDate, listStudents, listTeachers) {
        super(startDate, endDate, listStudents, listTeachers);
        this.patron = patron;
        this.startDate = startDate;
        this.endDate = endDate;
        this.listStudents = listStudents;
        this.listTeachers = listTeachers;
    }
}
exports.WebMission = WebMission;
//# sourceMappingURL=webmission.js.map