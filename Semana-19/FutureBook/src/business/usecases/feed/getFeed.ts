import { GetFeedGateway } from "../../gateways/FeedGateway";

export class GetFeedUC {
  private static POSTS_BY_PAGE = 3;
  constructor(private feedGateway: GetFeedGateway) {}

  async execute(input: GetFeedInput): Promise<GetFeedOutput> {
    let page = input.page;
    if(page <=0){
      page = 1
    };

    const offset = GetFeedUC.POSTS_BY_PAGE * (page - 1);

    const responses = await this.feedGateway.getFeedForUser(
      input.userId, 
      GetFeedUC.POSTS_BY_PAGE,
      offset
      )
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
  page: number
}

export interface GetFeedOutput {
  posts: Array<{
    photo: string
    description: string
    type: string
  }>
}