import { fillArrayByRanges, getRandomElement } from '../../common/helper';
import { Issuer, IssuerType } from './issuer';
import jcbLogo from '../../assets/jcb.svg';

class JCB implements Issuer {
  readonly name: string
  readonly icon: string
  readonly type: IssuerType
  private static _binPrefix: string[] = []

  constructor() {
    this.name = "JCB";
    this.icon = jcbLogo;
    this.type = IssuerType.JCB;
    if(JCB._binPrefix.length === 0) {
      fillArrayByRanges([{start: 3528, end: 3589}], JCB._binPrefix)
    }
  }

  getBINPrefix(): string {
    return getRandomElement(JCB._binPrefix);
  }
  
  maxNumberLength(): number {
    return 16;
  }
}

export default JCB;
