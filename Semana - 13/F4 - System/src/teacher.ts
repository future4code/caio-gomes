import { Specialty } from './specialty';
import { User } from './user';

export class Teacher implements User {
  constructor(
    public name: string,
    public email: string,
    public birthday: string,
    public specialty: Specialty
  ) {}
}
