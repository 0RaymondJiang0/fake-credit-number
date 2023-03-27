import { Issuer, IssuerType } from './issuer';
import { fillArrayByRanges, getRandomElement } from '../../common/helper';
import mastercardLogo from '../../assets/mastercard.svg';

class MasterCard implements Issuer {
  readonly name: string
  readonly icon: string
  readonly type: IssuerType

  private static _binPrefix: string[] = []

  constructor() {
    this.name = "Mastercard";
    this.icon = mastercardLogo;
    this.type = IssuerType.MasterCard;

    if(MasterCard._binPrefix.length === 0) {
      fillArrayByRanges([{start: 51, end: 55}, {start: 2221, end: 2720}], MasterCard._binPrefix);
    }
  }

  getBINPrefix(): string {
    return getRandomElement(MasterCard._binPrefix);
  }

  maxNumberLength(): number {
    return 16;
  }
}

export default MasterCard
