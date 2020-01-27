import { Post } from "../../entities/Post";
import { PostCreatorGateway } from "../../gateways/PostGateway";

export class CreatePostUC {
  constructor(private createPostGateway: PostCreatorGateway) {}

  public async execute(input: CreatePostInput): Promise<CreatePostOutput> {
    const newPost = new Post(
      input.photo,
      input.description,
      input.date,
      Post.convertType(input.type),
      input.userId
    );
    await this.createPostGateway.createPost(newPost);

    return {
      message: "Post created successfully!"
    };
  }
}

export interface CreatePostInput {
  photo: string;
  description: string;
  date: Date;
  type: string;
  userId: string;
}

export interface CreatePostOutput {
  message: string;
}
