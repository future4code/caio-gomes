export class Paper {
  private size: PaperSize;
  private type: PaperType;

  constructor(size: string, type: string) {
    if (!(size in PaperSize)) {
      throw new Error('Tamanho de papel inválido');
    }

    if (!(type in PaperType)) {
      throw new Error('Tipo de papel inválido');
    }

    this.size = size as PaperSize;
    this.type = type as PaperType;
  }

  public calculatePaperSizePrice(size: PaperSize) {
    switch (size) {
      case '13x18':
        return 20.0;
      case '21x30':
        return 27.8;
      case '30x30':
        return 35.4;
      case '30x42':
        return 42.3;
      case '42x60':
        return 55.6;
      default:
        return 0;
    }
  }

  public calculatePaperTypePrice(type: PaperType) {
    switch (type) {
      case 'BRILHANTE':
        return 1;
      case 'FOSCO':
        return 1.05;
      case 'FIBRA':
        return 1.12;
      case 'RESINADO':
        return 1.42;
      case 'PEROLA':
        return 1.53;
      default:
        return 0;
    }
  }

  public calculateTotalPaperPrice() {
    return (
      this.calculatePaperSizePrice(this.size) *
      this.calculatePaperTypePrice(this.type)
    );
  }
}

export enum PaperSize {
  '13x18' = '13x18',
  '21x30' = '21x30',
  '30x30' = '30x30',
  '30x42' = '30x42',
  '42x60' = '42x60'
}

export enum PaperType {
  'BRILHANTE' = 'BRILHANTE',
  'FOSCO' = 'FOSCO',
  'FIBRA' = 'FIBRA',
  'RESINADO' = 'RESINADO',
  'PEROLA' = 'PEROLA'
}
