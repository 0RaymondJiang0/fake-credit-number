import { Issuer, IssuerType } from '../issuer';
import { getRandomElement } from '../../../common/helper';
import dinersLogo from '../../../assets/diners2.svg';

class DinersUSCanada implements Issuer {
  readonly name: string
  readonly icon: string
  readonly type: IssuerType

  constructor() {
    this.name = "Diners US & Canada";
    this.icon = dinersLogo;
    this.type = IssuerType.DinersUSCanada;
  }

  getBINPrefix(): string {
    // In 2004, Diners Club and MasterCard reached an agreement, 
    // allowing Diners Club credit cards issued in the United States and Canada to use 16-digit MasterCard numbers 
    // and display the MasterCard logo on the front. 
    // This alliance enabled Diners Club cards issued in North America to be accepted by merchants worldwide that accept MasterCard.
    return getRandomElement(['54', '55']);
  }
  
  maxNumberLength(): number {
    return 16;
  }
}

export default DinersUSCanada;
