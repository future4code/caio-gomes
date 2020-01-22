import { FeedGateway } from "../../gateways/FeedGateway";

export class GetFeedUC {
  constructor(private feedGateway: FeedGateway) {}

  async execute(input: GetFeedInput): Promise<GetFeedOutput> {
    const responses = await this.feedGateway.getPostsForUser(input.userId);
    return {
      posts: responses.map((response) => ({
        photo: response.post.getPhoto(),
        description: response.post.getDescription(),
        date: response.post.getDate(),
        type: response.post.getType(),
        user: response.user
      }))
    };
  }
}

export interface GetFeedInput {
  userId: string;
}

export interface GetFeedOutput {
  posts: Array<{
    photo: string;
    description: string;
    date: Date;
    type: string;
    user: string
  }>;
}
