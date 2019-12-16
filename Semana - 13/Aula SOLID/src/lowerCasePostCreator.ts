import { ErrorPrinter } from './errorPrinter';
import { JSONFileManager } from './JSONFileManager';
import { PostCreator } from './postCreator';
import * as moment from 'moment';
import { Post } from './post';

export class LowerCasePostCreator implements PostCreator {
  private postFileManager = new JSONFileManager('posts.json');
  private erroPrinter = new ErrorPrinter();
  name: string;
  text: string;
  date: moment.Moment;

  public create(name: string, text: string): void {
    if (name && text) {
      const newPostLower = new Post(name, text.toLowerCase());
      this.postFileManager.saveToJSON(newPostLower);
    } else {
      this.erroPrinter.onError('Verifique se digitou corretamente', moment());
    }
  }
}
