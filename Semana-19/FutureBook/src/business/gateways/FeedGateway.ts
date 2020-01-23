import { Post } from "../entities/Post";

export interface FeedGateway {
    getPostsForUser(userId: string): Promise<Post[]>
}