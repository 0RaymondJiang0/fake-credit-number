import { IssuerType } from '../../credit_card/issuer/issuer';
import CardNumber from '../../credit_card/card_number';
import style from './index.module.scss';

const DisplayBoard = (props: {type: IssuerType}) => {
  const card = new CardNumber(props.type);
  const numbers: Array<string>[] = [[],[],[],[],[]];
  let k = 0;
  for (let i = 0; i < 15; i++) {
    if(i > 0 && i % 3 === 0) k++;
    numbers[k].push(card.generateWithFormat());
  }
  return (
    <div className={style.display_board}>
      <div className={style.title}>
        <img  src={card.issuer.icon} alt="logo" />
        <label>{card.issuer.name}</label>
        </div>
      <div className={style.numbers}>
        <table>
          {
            numbers.map((item) => {
              const chidren = item.map((number) => <td><label>{number}</label></td>);
              return <tr>{chidren}</tr>
            })
          }
        </table>
      </div>
    </div>
  )
};

export default DisplayBoard;
