import { Issuer, IssuerType } from './issuer';
import Visa from './visa';
import MasterCard from './master_card';
import AmericanExpress from './ame';
import DiscoverCard from './discover_card';
import JCB from './jcb';
import DinersCarteBlanche from './diners/carte_blanche';
import DinersInternational from './diners/international';
import DinersUSCanada from './diners/us_canada';
import Maestro from './maestro';
import UnionPay from './union_pay';

export const NewIssuer = (issuerType: IssuerType): Issuer => {
  switch (issuerType) {
    case IssuerType.Visa:
      return new Visa();
    case IssuerType.MasterCard:
      return new MasterCard();
    case IssuerType.Amex:
      return new AmericanExpress();
    case IssuerType.Discover:
      return new DiscoverCard();
    case IssuerType.JCB:
      return new JCB();
    case IssuerType.DinersCarteBlanche:
      return new DinersCarteBlanche();
    case IssuerType.DinersInternational:
      return new DinersInternational();
    case IssuerType.DinersUSCanada:
      return new DinersUSCanada();
    case IssuerType.Maestro:
      return new Maestro();
    case IssuerType.UnionPay:
      return new UnionPay();
    default:
      throw new Error('Unknown issuer type');
  }
}
