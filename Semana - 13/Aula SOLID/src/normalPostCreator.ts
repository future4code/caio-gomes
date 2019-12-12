import * as moment from 'moment';
import { ErrorPrinter } from './errorPrinter';
import { JSONFileManager } from './JSONFileManager';
import { PostCreator } from './postCreator';

const postFileManager = new JSONFileManager('posts.json');

export class NormalPostCreator implements PostCreator {
  private erroPrinter = new ErrorPrinter();
  name: string;
  text: string;
  date: moment.Moment;

  public create(name: string, text: string) {
    if (name === undefined || text === undefined) {
      this.erroPrinter.onError('Verifique se digitou corretamente', moment());
    } else {
      postFileManager.saveToJSON({ name, text });
    }
  }
}
