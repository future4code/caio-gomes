import * as moment from 'moment';

export class Post {
  name: string;
  text: string;
  date: any;

  constructor(name: string, text: string) {
    this.name = name;
    this.text = text;
    this.date = moment().utcOffset('-0300').format('DD/MM/YYYY HH:mm');
  }
}
