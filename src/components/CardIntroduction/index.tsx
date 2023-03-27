import style from './index.module.scss'
import { IssuerType } from '../../credit_card/issuer/issuer';

const introductions = new Map<IssuerType, JSX.Element>([
  [
    IssuerType.Visa,
    <div>
      <p>Visa Inc. is an American multinational financial services corporation headquartered in San Francisco, California.</p>
    </div>
  ],
  [
    IssuerType.MasterCard,
    <div>
      <p>Mastercard Inc. (stylized as MasterCard from 1979–2016, mastercard from 2016–2019) is the second-largest payment-processing corporation worldwide.</p>
    </div>
  ],
  [
    IssuerType.Amex,
    <div>
      <p>American Express Company (Amex) is an American multinational financial services corporation specialized in payment cards headquartered in New York City. It is one of the most valuable companies in the world and one of the 30 components of the Dow Jones Industrial Average.</p>
    </div>
  ],
  [
    IssuerType.Discover,
    <div>
      <p>Discover is a credit card brand issued primarily in the United States. It was introduced by Sears in 1985. Discover is the third largest credit card brand in the U.S. based on the number of cards in circulation, behind Visa and Mastercard, with 57 million cardholders.</p>
    </div>
  ],
  [
    IssuerType.JCB,
    <div>
      <p>JCB Co., Ltd. (株式会社ジェーシービー), formerly Japan Credit Bureau, is a credit card company based in Tokyo, Japan. It is accepted at JCB merchants, and has strategic alliances with Discover Network merchants in the United States, UnionPay merchants in China, American Express merchants in Canada, and RuPay merchants in India.</p>
    </div>
  ]
])

const CardIntroduction = (props: {type: IssuerType}) => {

  return (
    <div className={style.indtroduction}>{introductions.get(props.type)}</div>
  )
}

export default CardIntroduction;
