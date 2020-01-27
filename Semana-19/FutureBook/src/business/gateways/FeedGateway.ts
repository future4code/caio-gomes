import { Post } from "../entities/Post";

export interface FeedResponse {
    post: Post
    userName: string
}

export interface GetFeedGateway {
    getFeedForUser(userId: string, limit: number, offset: number): Promise<FeedResponse[]>
}

export interface GetPaginatedFeedByTypeGateway {
    getPaginatedFeedByType(type: string, limit: number, offset: number): Promise<FeedResponse[]>
}