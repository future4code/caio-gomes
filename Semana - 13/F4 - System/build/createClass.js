"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webmission_1 = require("./webmission");
const mobileMission_1 = require("./mobileMission");
const JSONFileManager_1 = require("./JSONFileManager");
class CreateClass {
    constructor() {
        this.registerFileManager = new JSONFileManager_1.JSONFileManager('class.json');
    }
    createMobileClass(mission) {
        this.registerFileManager.saveToJSON([mission]);
    }
    createWebClass(mission) {
        this.registerFileManager.saveToJSON([mission]);
    }
}
exports.CreateClass = CreateClass;
const newClassMobile = new mobileMission_1.MobileMission(1, '06/01/2020', '06/07/2020', [], []);
const createNewClass = new CreateClass();
createNewClass.createMobileClass(newClassMobile);
const newClassWeb = new webmission_1.WebMission('Buzz', '06/01/2020', '06/07/2020', [], []);
const createNewClassWeb = new CreateClass();
createNewClassWeb.createWebClass(newClassWeb);
//# sourceMappingURL=createClass.js.map