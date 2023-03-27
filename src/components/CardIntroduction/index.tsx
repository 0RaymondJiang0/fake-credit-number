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
      <p>Mastercard Inc. </p>
      <p>(stylized as MasterCard from 1979–2016, mastercard from 2016–2019) is the second-largest payment-processing corporation worldwide.</p>
    </div>
  ]
])

const CardIntroduction = (props: {type: IssuerType}) => {

  return (
    <div className={style.indtroduction}>{introductions.get(props.type)}</div>
  )
}

export default CardIntroduction;