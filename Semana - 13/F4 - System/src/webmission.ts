import { Student } from './student';
import { Teacher } from './teacher';
import { Mission } from './mission';

export class WebMission extends Mission {
  patron: string;
  startDate: string;
  endDate: string;
  listStudents: Student[];
  listTeachers: Teacher[];

  constructor(
    patron: string,
    startDate: string,
    endDate: string,
    listStudents: Student[],
    listTeachers: Teacher[]
  ) {
    super(startDate, endDate, listStudents, listTeachers);
    this.patron = patron;
    this.startDate = startDate
    this.endDate = endDate
    this.listStudents = listStudents
    this.listTeachers = listTeachers
  }
}
