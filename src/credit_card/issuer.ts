import { getRandomElement } from "../common/helper";

enum IssuerType {
  Visa = 1,
  MasterCard = 2,
}

class Issuer {
  type: IssuerType;
  name: string;
  icon: string;

  constructor(type: IssuerType, icon: string, binNumber: number = 6) {
    this.type = type;
    this.name = this.getIssuerTypeName(type);
    this.icon = icon;
  }

  getIssuerTypeName(issuerType: IssuerType): string {
    switch (issuerType) {
      case IssuerType.Visa:
        return 'Visa';
      case IssuerType.MasterCard:
        return 'MasterCard';
      default:
        return 'Unknown';
    }
  }

  getBINCodePrefix(issuerType: IssuerType): string {
    switch (issuerType) {
      case IssuerType.Visa:
        return '4';
      case IssuerType.MasterCard:
        return getRandomElement(this.getMasterCardNumberRange());
      default:
        return 'Unknown';
    }
  }

  getMasterCardNumberRange(): string[] {
    const numbers: string[] = [];
    for(let i = 51; i <= 55; i++) {
      numbers.push(i.toString());
    }

    return numbers;
  }
}