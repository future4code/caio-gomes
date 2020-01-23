import { Post } from "../entities/Post";

export interface FeedResponse {
    post: Post
    userName: string
}

export interface GetFeedGateway {
    getPostsForUser(userId: string): Promise<FeedResponse[]>
}

export interface GetFeedByType {
    getFeedByType(type: string): Promise<FeedResponse[]>
}