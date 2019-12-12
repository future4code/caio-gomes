import * as moment from 'moment';

export abstract class Post {
  name: string;
  text: string;
  date: moment.Moment;

  constructor(name: string, text: string) {
    this.name = name;
    this.text = text;
    this.date = moment();
  }
}
