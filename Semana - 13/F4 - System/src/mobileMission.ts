import { Student } from './student';
import { Teacher } from './teacher';
import { Mission } from './mission';

export class MobileMission extends Mission {
  classNumber: number;
  startDate: string;
  endDate: string;
  listStudents: Student[];
  listTeachers: Teacher[];

  constructor(
    classNumber: number,
    startDate: string,
    endDate: string,
    listStudents: Student[],
    listTeachers: Teacher[]
  ) {
    super(startDate, endDate, listStudents, listTeachers);
    this.classNumber = classNumber;
    this.startDate = startDate;
    this.endDate = endDate;
    this.listStudents = listStudents;
    this.listTeachers = listTeachers;
  }
}
