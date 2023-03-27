import { Issuer, IssuerType } from './issuer';
import { getRandomElement } from '../../common/helper';
import ameLogo from '../../assets/amex.svg';

class AmericanExpress implements Issuer {
  readonly name: string
  readonly icon: string
  readonly type: IssuerType

  constructor() {
    this.name = "American Express";
    this.icon = ameLogo;
    this.type = IssuerType.Amex;
  }

  getBINPrefix(): string {
    return getRandomElement(["34", "37"]);
  }
  
  maxNumberLength(): number {
    return 15;
  }
}

export default AmericanExpress;
