import * as moment from 'moment';
import { ErrorPrinter } from './errorPrinter';
import { JSONFileManager } from './JSONFileManager';
import { PostCreator } from './postCreator';

export class NormalPostCreator implements PostCreator {
  private postFileManager = new JSONFileManager('posts.json');
  private erroPrinter = new ErrorPrinter();
  name: string;
  text: string;
  date: moment.Moment;

  public create(name: string, text: string) {
    if (name && text) {
      this.postFileManager.saveToJSON({ name, text });
    } else {
      this.erroPrinter.onError('Verifique se digitou corretamente', moment());
    }
  }
}
