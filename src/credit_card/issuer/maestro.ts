import { fillArrayByRanges, getRandomElement } from '../../common/helper';
import { Issuer, IssuerType } from './issuer';
import maestroLogo from '../../assets/maestro.svg';

class Maestro implements Issuer {
  readonly name: string
  readonly icon: string
  readonly type: IssuerType
  private static _binPrefix: string[] = []

  constructor() {
    this.name = "Maestro";
    this.icon = maestroLogo;
    this.type = IssuerType.Maestro;
    if(Maestro._binPrefix.length === 0) {
      Maestro._binPrefix.push('50','6')
      fillArrayByRanges([{start: 56, end: 58}], Maestro._binPrefix)
    }
  }

  getBINPrefix(): string {
    return getRandomElement(Maestro._binPrefix);
  }
  
  maxNumberLength(): number {
    return 19;
  }
}

export default Maestro;
