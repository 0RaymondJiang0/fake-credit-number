import { NewIssuer } from './issuer/factory';
import { Issuer, IssuerType } from './issuer/issuer';
import { generateRandomNumbers } from '../common/helper';

class CardNumber {
  readonly issuer: Issuer;
  private readonly length: number;

  constructor(type: IssuerType, length: number = 16) {
    this.issuer = NewIssuer(type);
    if(length >= this.issuer.maxNumberLength()) { 
      this.length = this.issuer.maxNumberLength();
    } else {
      this.length = length;
    }
  }

  generate(): string {
    const prefix = this.issuer.getBINPrefix();
    const generateLen = this.length - prefix.length;
    while(true) {
      const randomNumbers = generateRandomNumbers(generateLen);
      const code = `${prefix}${randomNumbers}`;
      if(CardNumber.checkByLuhnAlgorithm(code)) {
        return code
      }
    }
  }

  generateWithFormat(): string {
    const code = this.generate();
    let result = '';
    for(let i = 0; i < code.length; i++) {
      if(i % 4 === 0 && i !== 0) {
        result += ' ';
      }
      result += code.charAt(i);
    }
    return result;
  }

  static checkByLuhnAlgorithm(code: string): boolean {
    let sum = 0;
    let shouldDouble = false;
    for (let i = code.length - 1; i >= 0; i--) {
      if(code.charAt(i) === ' ') continue;
      let digit = parseInt(code.charAt(i));
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  }
}

export default CardNumber
