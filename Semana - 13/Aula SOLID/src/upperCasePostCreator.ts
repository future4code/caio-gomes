import { ErrorPrinter } from './errorPrinter';
import { JSONFileManager } from './JSONFileManager';
import { PostCreator } from './postCreator';
import * as moment from 'moment';
import { Post } from './post';

export class UpperCasePostCreator implements PostCreator {
  private postFileManager = new JSONFileManager('posts.json');
  private erroPrinter = new ErrorPrinter();
  name: string;
  text: string;
  date: moment.Moment;

  public create(name: string, text: string): void {
    if (name && text) {
      const newPostUpper = new Post (name, text.toUpperCase())
      this.postFileManager.saveToJSON(newPostUpper);
    } else {
      this.erroPrinter.onError('Verifique se digitou corretamente', moment());
    }
  }
}
