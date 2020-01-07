export class Frame {
  private size: FrameSize;
  private type: FrameType;

  constructor(size: string, type: string) {
    if (!(size in FrameSize)) {
      throw new Error('Tamanho moldura invalido');
    }

    if (!(type in FrameType)) {
      throw new Error('Tipo moldura invalido');
    }

    this.size = size as FrameSize;
    this.type = type as FrameType;
  }

  public calculateFrameSizePrice(size: FrameSize) {
    switch (size) {
      case 'PEQUENA':
        return 0.25;
      case 'MEDIA':
        return 0.5;
      case 'GRANDE':
        return 0.75;
      default:
        return 0;
    }
  }

  public calculateFrameTypePrice(type: FrameType) {
    switch (type) {
      case 'CRUA':
        return 15.0;
      case 'LISA':
        return 32.0;
      case 'CLASSICA':
        return 43.0;
      case 'VINTAGE':
        return 52.5;
      case 'MADEIRA':
        return 60.0;
      default:
        return 0;
    }
  }

  public calculateTotalFramePrice() {
    return (
      this.calculateFrameSizePrice(this.size) *
      this.calculateFrameTypePrice(this.type)
    );
  }
}

export enum FrameSize {
  PEQUENA = 'PEQUENA',
  MEDIA = 'MEDIA',
  GRANDE = 'GRANDE'
}

export enum FrameType {
  CRUA = 'CRUA',
  LISA = 'LISA',
  CLASSICA = 'CLASSICA',
  VINTAGE = 'VINTAGE',
  MADEIRA = 'MADEIRA'
}
