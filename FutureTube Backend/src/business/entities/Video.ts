export class Video {
  constructor(
    private title: string,
    private description: string,
    private url: string,
    private userId: string
  ) {}

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
