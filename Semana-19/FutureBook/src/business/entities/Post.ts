import { User } from "./User";

export class Post {
  constructor(
    private id: number,
    private photo: string,
    private description: string,
    private date: Date,
		private type: PostType,
    private userId: string,
  ) {}

  public getId(): number {
    return this.id
  }
  
  public getPhoto(): string {
    return this.photo;
  }

  public getDescription(): string {
    return this.description;
  }

  public getDate(): Date {
    return this.date;
	}
	
	public getType(): PostType {
		return this.type;
	}

	public getUserId() {
		return this.userId
	}

  public static convertType(type: string): PostType {
    switch (type.toUpperCase()) {
      case "NORMAL":
        return PostType.NORMAL;
      case "EVENTO":
        return PostType.EVENTO;
      default:
        throw new Error("Tipo do post é inválido");
    }
  }
}

export enum PostType {
  NORMAL = "NORMAL",
  EVENTO = "EVENTO"
}
