import { IssuerType } from './issuer/issuer';
import CardNumber from './card_number';

it('the luhan algorithm can check the credit number', () => {
  const creditNumbers = [
    '4633 2842 3449 6286',
    '4607 9412 9021 7540',
    '4246 3051 7081 0971',
    '4832 1328 9936 6121',
    '5177 0026 1249 7406',
    '5188 6723 0973 3441'
  ];
  creditNumbers.forEach((creditNumber) => {
    expect(CardNumber.checkByLuhnAlgorithm(creditNumber)).toBe(true);
  });
});

describe('the credit number can generate', () => {

  it('can generate visa credit number', () => {
    const visa = new CardNumber(IssuerType.Visa);
    const code = visa.generate();
    expect(CardNumber.checkByLuhnAlgorithm(code)).toBe(true);
    expect(code.charAt(0)).toBe(visa.issuer.getBINPrefix());
    expect(code.length).toBeLessThanOrEqual(visa.issuer.maxNumberLength());
  });

  it('can generate master card credit number', () => {
    const masterCard = new CardNumber(IssuerType.MasterCard);
    const code = masterCard.generate();
    expect(CardNumber.checkByLuhnAlgorithm(code)).toBe(true);
    expect(code.length).toBeLessThanOrEqual(masterCard.issuer.maxNumberLength());
  });

  it('can generate american express credit number', () => {
    const americanExpress = new CardNumber(IssuerType.Amex);
    const code = americanExpress.generate();
    expect(CardNumber.checkByLuhnAlgorithm(code)).toBe(true);
    expect(code.length).toBeLessThanOrEqual(americanExpress.issuer.maxNumberLength());
  });

  it('can generate discover credit number', () => {
    const discover = new CardNumber(IssuerType.Discover);
    const code = discover.generate();
    // console.log(discover.issuer.name, code);
    expect(CardNumber.checkByLuhnAlgorithm(code)).toBe(true);
    expect(code.length).toBeLessThanOrEqual(discover.issuer.maxNumberLength());
  });

  it('can generate JCB credit number', () => {
    const jcb = new CardNumber(IssuerType.JCB);
    const code = jcb.generate();
    expect(CardNumber.checkByLuhnAlgorithm(code)).toBe(true);
    expect(code.length).toBeLessThanOrEqual(jcb.issuer.maxNumberLength());
  });

  it('can generate diners club credit number', () => {
    const dinersTypes: Array<IssuerType> = [
      IssuerType.DinersCarteBlanche, 
      IssuerType.DinersInternational,
      IssuerType.DinersUSCanada
    ]

    dinersTypes.forEach((dinersType) => {
      const dinersClub = new CardNumber(dinersType);
      const code = dinersClub.generate();
      expect(CardNumber.checkByLuhnAlgorithm(code)).toBe(true);
      expect(code.length).toBeLessThanOrEqual(dinersClub.issuer.maxNumberLength());
    });
  });

  it('can generate maestro credit number', () => {
    const maestro = new CardNumber(IssuerType.Maestro);
    const code = maestro.generate();
    expect(CardNumber.checkByLuhnAlgorithm(code)).toBe(true);
    expect(code.length).toBeLessThanOrEqual(maestro.issuer.maxNumberLength());
  });

  it('can generate union pay credit number', () => {
    const unionPay = new CardNumber(IssuerType.UnionPay);
    const code = unionPay.generate();
    expect(CardNumber.checkByLuhnAlgorithm(code)).toBe(true);
    expect(code.length).toBeLessThanOrEqual(unionPay.issuer.maxNumberLength());
  });
});


