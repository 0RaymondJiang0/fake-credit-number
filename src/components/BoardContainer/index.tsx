import style from './index.module.scss';
import DisplayBoard from '../DisplayBoard';
import { IssuerType } from '../../credit_card/issuer/issuer';

const BoardContainer = () => {
  const items: Array<IssuerType>[] = [[], [], [], [], []];
  let k = 0;
  for (let i = 0; i < 10; i++) {
    if(i > 0 && i % 2 === 0) k++;
    items[k].push((i+1) as IssuerType);
  }
  
  return (
    <div className={style.board_container}>
      <div>
        <table>
          {
            items.map((item) => {
              const chidren = item.map((type) => <td><DisplayBoard type={type} /></td>);
              return <tr>{chidren}</tr>
            })
          }
        </table>
      </div>
    </div>
  )
}

export default BoardContainer;
