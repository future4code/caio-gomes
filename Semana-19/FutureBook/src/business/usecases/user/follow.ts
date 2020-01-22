import { FollowUserGateway } from "../../gateways/UserGateways";

export class FollowUserUC {
    constructor(
        private followUserGateway: FollowUserGateway
    ) { }
    async execute(input: FollowUserInput): Promise<FollowUserOutput> {
        await this.followUserGateway.createFollow(input.followerId, input.followedId);
        return {
            message: "User Followed Successfully!"
        }
    }
}

export interface FollowUserInput {
    followerId: string
    followedId: string
}

interface FollowUserOutput {
    message: string
}