import {
  UnmatchUserGateway
} from "../../gateways/UserGateway";

export class UnmatchUserUC {
  constructor(
    private unmatchUserGateway: UnmatchUserGateway,
  ) {}
  async execute(input: UnmatchUserInput): Promise<UnmatchUserOutput> {
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
