import { UnfollowUserGateway } from "../../gateways/UserGateways";

export class UnfollowUserUC {
    constructor(
        private unfollowUserGateway: UnfollowUserGateway
    ) { }
    async execute(input: UnfollowUserInput): Promise<UnfollowUserOutput> {
       await this.unfollowUserGateway.createUnfollow(input.followerId, input.followedId);
       
       return {
            message: "User Unfollowed Successfully!"
        }
    }
}

export interface UnfollowUserInput {
    followerId: string
    followedId: string
}

interface UnfollowUserOutput {
    message: string
}