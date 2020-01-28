import {
  VerifyMatchExists,
  UnmatchUserGateway
} from "../../gateways/UserGateway";

export class UnmatchUserUC {
  constructor(
    private unmatchUserGateway: UnmatchUserGateway,
    private verifyRelationGateway: VerifyMatchExists
  ) {}
  async execute(input: UnmatchUserInput): Promise<UnmatchUserOutput> {
    const relationExists = await this.verifyRelationGateway.verifyMatchExists(
      input.userId,
      input.userToUnmatch
    );
    if (!relationExists) {
      throw new Error("User it's not your friend and doens't like you!");
    }

    await this.unmatchUserGateway.createUnmatch(
      input.userId,
      input.userToUnmatch
    );

    return {
      message: "User Unmatched Successfully!"
    };
  }
}

export interface UnmatchUserInput {
  userId: string;
  userToUnmatch: string;
}

interface UnmatchUserOutput {
  message: string;
}
