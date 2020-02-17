export class Video {
  constructor(
    private videoId: string,
    private title: string,
    private description: string,
    private url: string,
    private userId: string
  ) {}

  public getVideoId(): string {
    return this.videoId;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getUrl(): string {
    return this.url;
  }

  public getUserId(): string {
    return this.userId;
  }
}
