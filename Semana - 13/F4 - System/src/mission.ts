import { Teacher } from './teacher';
import { Student } from './student';
export abstract class Mission {
  constructor(startDate: string, endDate: string, listStudent: Student[], listTeacher: Teacher[]){}
}