import style from './index.module.scss';
import DisplayBoard from '../DisplayBoard';
import { IssuerType } from '../../credit_card/issuer/issuer';

const BoardContainer = () => {
  const items: Array<IssuerType> = [];
  for (let i = 1; i <= 10; i++) {
    items.push(i as IssuerType);
  }

  return (
    <div className={style.board_container}>
      <div>
        {
          items.map((item) => {
            return <div className="row"><DisplayBoard type={item} /></div>
          })
        }
      </div>
    </div>
  )
}

export default BoardContainer;
