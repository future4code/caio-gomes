import { Post } from "../entities/Post";

export interface FeedResponse {
    post: Post
    userName: string
}

export interface FeedGateway {
    getPostsForUser(userId: string): Promise<FeedResponse[]>
}