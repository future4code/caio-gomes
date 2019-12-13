import { Specialty } from './specialty';
import { MobileMission } from './mobileMission';
import { WebMission } from './webmission';
import { Teacher } from './teacher';
import { Student } from './student';
import { JSONFileManager } from './JSONFileManager';

class MainTaskManager {
  private webJSON = new JSONFileManager('webClass.json');
  private mobileJSON = new JSONFileManager('mobileClass.json');

  executeWeb(newClass: object) {
    this.webJSON.saveToJSON(newClass);
    this.pushTeacherWeb();
    this.pushStudentWeb();
  }

  pushTeacherWeb() {
    const register = this.webJSON.getJSONContent();
    register.listTeachers.push(teacher1);
    this.webJSON.saveToJSON(register);
  }

  pushStudentWeb() {
    const register = this.webJSON.getJSONContent();
    register.listStudents.push(newStudentWeb);
    this.webJSON.saveToJSON(register);
  }

  executeMobile(newClass: object) {
    this.mobileJSON.saveToJSON(newClass);
    this.pushTeacherMobile();
    this.pushStudentMobile();
  }

  pushTeacherMobile() {
    const register = this.mobileJSON.getJSONContent();
    register.listTeachers.push(teacher2);
    this.mobileJSON.saveToJSON(register);
  }

  pushStudentMobile() {
    const register = this.mobileJSON.getJSONContent();
    register.listStudents.push(newStudentMobile);
    this.mobileJSON.saveToJSON(register);
  }
}

const webClass: Student[] = [];
const mobileClass: Student[] = [];
const teachers: Teacher[] = [];

const newWebClass: WebMission = new WebMission(
  'Bruce',
  '06/01/2020',
  '06/07/2020',
  webClass,
  teachers
);

const newMobileClass: MobileMission = new MobileMission(
  1,
  '06/01/2020',
  '06/07/2020',
  mobileClass,
  teachers
);

const newStudentWeb: Student = new Student(
  'Caio',
  'caio@gmail.com',
  '05/12/1992',
  newWebClass.patron
);

const newStudentMobile: Student = new Student(
  'Jack',
  'jackblack@gmail.com',
  '23/04/1965',
  newMobileClass.classNumber
);

const teacher1: Teacher = new Teacher(
  'Madruga, Seo',
  'madruguinha@gmail.com',
  '17/04/1945',
  Specialty.React
);

const teacher2: Teacher = new Teacher(
  'Pai Mei',
  'fivepointpalm@gmail.com',
  '11/11/1850',
  Specialty.Redux
);

const systemF4 = new MainTaskManager();
systemF4.executeWeb(newWebClass);
systemF4.executeMobile(newMobileClass);
