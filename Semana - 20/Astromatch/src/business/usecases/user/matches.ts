import {
  MatchUserGateway,
  VerifyUserExistsGateway,
  VerifyMatchExists
} from "../../gateways/UserGateway";

export class MatchesUC {
  constructor(
    private matchUserGateway: MatchUserGateway,
    private verifyUserExistsGateway: VerifyUserExistsGateway,
    private verifyRelationGateway: VerifyMatchExists
  ) {}

  async execute(input: MatchUserInput): Promise<MatchUserOutput> {
    await this.verifyUserExistsGateway.verifyUserExists(input.userId);
    const relationsExists = await this.verifyRelationGateway.verifyMatchExists(
      input.userId,
      input.userToMatch
    );
    if (!relationsExists) {
      await this.matchUserGateway.createMatch(input.userId, input.userToMatch);
      return {
        message: "User matched Successfuly"
      };
    }
    throw new Error("User is already a match!");
  }
}

export interface MatchUserInput {
  userId: string;
  userToMatch: string;
}

interface MatchUserOutput {
  message: string;
}
