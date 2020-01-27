import { GetPaginatedFeedByTypeGateway } from "../../gateways/FeedGateway";
import { Post, PostType } from "../../entities/Post";

export class GetFeedByTypeUC {
	private static POSTS_BY_PAGE = 3;
	constructor(private getFeedByTypeGateway: GetPaginatedFeedByTypeGateway) { }

	async execute(input: GetFeedByTypeInput): Promise<GetFeedByTypeOutput> {
		const type = Post.convertType(input.type);
		let page = input.page;
		if(page <=0) {
			page = 1
		};

		const offset = GetFeedByTypeUC.POSTS_BY_PAGE * (page - 1);

		const responses = await this.getFeedByTypeGateway.getPaginatedFeedByType(
			type,
			GetFeedByTypeUC.POSTS_BY_PAGE,
			offset 
			);
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

export interface GetFeedByTypeInput {
	type: string;
	page: number
}

export interface GetFeedByTypeOutput {
	posts: Array<{
		photo: string;
		description: string;
		type: PostType;
	}>
}
