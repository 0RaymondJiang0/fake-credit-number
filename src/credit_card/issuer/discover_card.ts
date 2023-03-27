import { Issuer, IssuerType } from './issuer';
import { fillArrayByRanges, getRandomElement } from '../../common/helper';
import discoverLogo from '../../assets/discover.svg';

class DiscoverCard implements Issuer {
  readonly name: string
  readonly icon: string
  readonly type: IssuerType
  private static _binPrefix: string[] = []

  constructor() {
    this.name = "Discover";
    this.icon = discoverLogo;
    this.type = IssuerType.Discover;
    if(DiscoverCard._binPrefix.length === 0) {
      DiscoverCard._binPrefix.push('6011', '65')
      fillArrayByRanges([{start: 644, end: 649}, {start: 622126, end: 622925}], DiscoverCard._binPrefix);
    }
  }

  getBINPrefix(): string {
    return getRandomElement(DiscoverCard._binPrefix);
  }
  
  maxNumberLength(): number {
    return 16;
  }
}

export default DiscoverCard;
