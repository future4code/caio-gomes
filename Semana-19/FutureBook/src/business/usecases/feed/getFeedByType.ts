import { GetFeedByType } from "../../gateways/FeedGateway";
import { Post, PostType } from "../../entities/Post";

export class GetFeedByTypeUC {
  constructor(private getFeedByTypeGateway: GetFeedByType) {}

  async execute(input: GetFeedByTypeInput): Promise<GetFeedByTypeOutput> {
    const type = Post.convertType(input.type);
    const responses = await this.getFeedByTypeGateway.getFeedByType(type);
    return {
			posts: responses.map((response) => ({
				photo: response.post.getPhoto(),
				description: response.post.getDescription(),
				type: response.post.getType(),
				userName: response.userName
			}))
		}
  }
}

export interface GetFeedByTypeInput {
  type: string;
}

export interface GetFeedByTypeOutput {
	posts: Array<{
		photo: string;
  description: string;
  type: PostType;
	}>
}
