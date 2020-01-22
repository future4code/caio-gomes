import { Post } from "../entities/Post";

export interface FeedContent {
    post: Post
    userName: string
}

export interface FeedGateway {
    getPostsForUser(userId: string): Promise<FeedContent[]>
}