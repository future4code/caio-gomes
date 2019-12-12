import { Post } from "./post";

export interface PostCreator extends Post {
  create(name: string, text: string): void
}