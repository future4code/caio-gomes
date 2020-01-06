export class Order {
  constructor(
    private photo: string,
    private size: string,
    private paper: string,
    private borderType: string,
    private borderSize: string,
    private borderColor: string
  ) {}

    public getPhoto() {
      return this.photo
    }

    public getSize() {
      return this.size
    }

    public getPaper() {
      return this.paper
    }

    public getBorderType() {
      return this.borderType
    }

    public getBorderSize() {
      return this.borderSize
    }

    public getBorderColor() {
      return this.borderColor
    }

}