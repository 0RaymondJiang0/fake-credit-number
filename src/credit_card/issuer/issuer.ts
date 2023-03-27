
export enum IssuerType {
  Visa = 1,
  MasterCard = 2,
  Amex = 3,
  Discover = 4,
  JCB = 5,
  DinersCarteBlanche = 6,
  DinersInternational = 7,
  DinersUSCanada = 8,
  Maestro = 9,
  UnionPay = 10,
}

export  interface Issuer {
  readonly name: string
  readonly icon: string
  readonly type: IssuerType

  getBINPrefix: () => string;
  maxNumberLength: () => number;
}

