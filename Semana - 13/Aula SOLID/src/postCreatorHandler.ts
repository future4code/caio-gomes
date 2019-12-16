import { NormalPostCreator } from './normalPostCreator';
import { LowerCasePostCreator } from './lowerCasePostCreator';
import { UpperCasePostCreator } from './upperCasePostCreator';

export class PostCreatorHandler {
  public execute(name: string, text: string) {
    if (text.indexOf('&') === 0) {
      new UpperCasePostCreator().create(name, text);
    } else if (text.indexOf('%') === 0) {
      new LowerCasePostCreator().create(name, text);
    } else {
      new NormalPostCreator().create(name, text);
    }
  }
}

const newPost = new PostCreatorHandler();

// newPost.execute('Caio', '%POST TEM QUE FICAR EM MINUSCÚLO!');
newPost.execute('Caio', '&post tem que ficar em maiscúlo!');
// newPost.execute('Caio', 'Post tem que ficar normal!');
