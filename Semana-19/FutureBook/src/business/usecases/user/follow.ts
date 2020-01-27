import {
  FollowUserGateway,
  VerifyUserExists,
  VerifyRelationExists
} from "../../gateways/UserGateways";

export class FollowUserUC {
  constructor(
    private followUserGateway: FollowUserGateway,
    private verifyUserGateway: VerifyUserExists,
    private verifyRelationGateway: VerifyRelationExists
  ) {}
  async execute(input: FollowUserInput): Promise<FollowUserOutput> {
    await this.verifyUserExists(input);
    const relationExists = await this.verifyRelationGateway.verifyRelationExists(
      input.followerId,
      input.followedId
    );

    if (!relationExists) {
      await this.followUserGateway.createFollow(
        input.followerId,
        input.followedId
      );
      return {
        message: "User Followed Successfuly"
      };
    }

    throw new Error("User is already your friend :)!");
  }

  async verifyUserExists(input: FollowUserInput) {
    await Promise.all([
      this.verifyUserGateway.verifyUserExists(input.followerId),
      this.verifyUserGateway.verifyUserExists(input.followedId)
    ]);
  }
}

export interface FollowUserInput {
  followerId: string;
  followedId: string;
}

interface FollowUserOutput {
  message: string;
}
