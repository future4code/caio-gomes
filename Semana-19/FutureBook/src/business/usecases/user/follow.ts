import { FollowUserGateway, VerifyUserExists } from "../../gateways/UserGateways";

export class FollowUserUC {
    constructor(
        private followUserGateway: FollowUserGateway,
        private verifyUserGateway: VerifyUserExists
    ) { }
    async execute(input: FollowUserInput): Promise<FollowUserOutput> {
        await this.verifyUserExists(input)
        await this.followUserGateway.createFollow(input.followerId, input.followedId);
        
        return {
            message: "User Followed Successfully!"
        }
    }

    async verifyUserExists(input: FollowUserInput) {
        await Promise.all([
            this.verifyUserGateway.verifyUserExists(input.followedId),
            this.verifyUserGateway.verifyUserExists(input.followerId)
        ])
    };
}

export interface FollowUserInput {
    followerId: string
    followedId: string
}

interface FollowUserOutput {
    message: string
}