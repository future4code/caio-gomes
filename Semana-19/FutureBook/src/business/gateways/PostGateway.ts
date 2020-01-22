import { Post } from "../entities/Post";

export interface PostCreatorGateway {
    createPost(post: Post): Promise<void>;
}