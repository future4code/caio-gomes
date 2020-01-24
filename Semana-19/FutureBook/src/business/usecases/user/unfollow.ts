import { UnfollowUserGateway, VerifyRelationExists } from "../../gateways/UserGateways";

export class UnfollowUserUC {
    constructor(
        private unfollowUserGateway: UnfollowUserGateway,
        private verifyRelationGateway: VerifyRelationExists
    ) { }
    async execute(input: UnfollowUserInput): Promise<UnfollowUserOutput> {
        const relationExists = await this.verifyRelationGateway.verifyRelationExists(input.followerId, input.followedId)
        if(!relationExists) {
            throw new Error("User it's not your friend and doens't like you!")
        }

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