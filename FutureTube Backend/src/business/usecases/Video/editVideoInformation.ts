import { EditVideoInformationGateway } from "./../../gateways/videos/videoGateway";
export class EditVideoInformationUC {
  constructor(
    private editVideoInformationGateway: EditVideoInformationGateway
  ) {}

  async execute(
    input: EditVideoInformationInput
  ): Promise<EditVideoInformationOutput> {
    await this.editVideoInformationGateway.editVideoInformation(
      input.videoId,
      input.newTitle,
      input.newDescription
    );

    return {
      message: "Video edited successfully"
    };
  }
}

export interface EditVideoInformationInput {
  videoId: string;
  newTitle: string;
  newDescription: string;
}

export interface EditVideoInformationOutput {
  message: string;
}
