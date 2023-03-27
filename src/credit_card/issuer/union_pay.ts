import { Issuer,IssuerType } from './issuer';
import unionpayLogo from '../../assets/unionpay.svg';

class UnionPay implements Issuer {
  readonly name: string
  readonly icon: string
  readonly type: IssuerType

  constructor() {
    this.name = "UnionPay";
    this.icon = unionpayLogo;
    this.type = IssuerType.UnionPay;
  }

  getBINPrefix(): string {
    return "62";
  }
  
  maxNumberLength(): number {
    return 19;
  }
}

export default UnionPay;
