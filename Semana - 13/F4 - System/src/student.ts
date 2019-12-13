import { User } from './user';
import { Mission } from './mission';

export class Student implements User {
  constructor(
    public name: string,
    public email: string,
    public birthday: string,
    public mission: Mission
  ) {}
}
