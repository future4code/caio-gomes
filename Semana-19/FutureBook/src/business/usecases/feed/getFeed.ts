import { GetFeedGateway } from "../../gateways/FeedGateway";

export class GetFeedUC {
  constructor(private feedGateway: GetFeedGateway) {}

  async execute(input: GetFeedInput): Promise<GetFeedOutput> {
    const responses = await this.feedGateway.getPostsForUser(input.userId)
    console.log(responses)
    return {
      posts: responses.map((response) => ({
        photo: response.post.getPhoto(),
        description: response.post.getDescription(),
        type: response.post.getType(),
        date: response.post.getDate(),
        userName: response.userName
      }))
    }
  }
}

export interface GetFeedInput {
  userId: string;
}

export interface GetFeedOutput {
  posts: Array<{
    photo: string
    description: string
    type: string
  }>
}