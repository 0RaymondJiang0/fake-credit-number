import { Issuer, IssuerType } from '../issuer';
import dinersLogo from '../../../assets/diners2.svg';

class DinersInternational implements Issuer {
  readonly name: string
  readonly icon: string
  readonly type: IssuerType

  constructor() {
    this.name = "Diners International";
    this.icon = dinersLogo;
    this.type = IssuerType.DinersInternational;
  }

  getBINPrefix(): string {
    return "36";
  }
  
  maxNumberLength(): number {
    return 14;
  }
}

export default DinersInternational;
