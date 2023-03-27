import { Issuer, IssuerType } from '../issuer';
import { getRandomElement } from '../../../common/helper';
import dinersLogo from '../../../assets/diners2.svg';

class DinersCarteBlanche implements Issuer {
  readonly name: string
  readonly icon: string
  readonly type: IssuerType

  constructor() {
    this.name = "Diners Carte Blanche";
    this.icon = dinersLogo;
    this.type = IssuerType.DinersCarteBlanche;
  }

  getBINPrefix(): string {
    return getRandomElement(['300','301','302','303','304','305']);
  }
  
  maxNumberLength(): number {
    return 14;
  }
}

export default DinersCarteBlanche;
