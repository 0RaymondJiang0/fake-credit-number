import { Issuer, IssuerType } from './issuer';
import visaLogo from '../../assets/visa.svg';

class Visa implements Issuer {
  readonly name: string
  readonly icon: string
  readonly type: IssuerType

  constructor() {
    this.name = "Visa";
    this.icon = visaLogo;
    this.type = IssuerType.Visa;
  }

  getBINPrefix(): string {
    return "4";
  }

  maxNumberLength(): number {
    return 19;
  }
}

export default Visa;
