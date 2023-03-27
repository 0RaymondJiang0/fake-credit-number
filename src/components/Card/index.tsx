import { useEffect, useState } from 'react';
import style from './index.module.scss';
import CardNumber from '../../credit_card/card_number';
import { IssuerType } from '../../credit_card/issuer/issuer';
import chipImg from '../../assets/chip-debit.svg';
import { getRandomElement } from '../../common/helper';

const Card = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardLogo, setCardLogo] = useState('');
  const [userName, setUserName] = useState('');
  // const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  
  useEffect(() => {
    setUserName("JACK MA")
    setToDate("01/25")
    const creditCard = new  CardNumber(IssuerType.Amex);
    setCardName(creditCard.issuer.name);
    setCardNumber(creditCard.generateWithFormat());
    setCardLogo(creditCard.issuer.icon);

    const issue_types: IssuerType[] = []
    for (let i = 1; i <= 10; i++) {
      issue_types.push(i as IssuerType);
    }

    const timer = window.setInterval(() => {
      const randomType = getRandomElement(issue_types);
      const card = new CardNumber(randomType);
      const code = card.generateWithFormat();
      console.log(code);
      setCardName(card.issuer.name);
      setCardNumber(code);
      setCardLogo(card.issuer.icon);
    }, 4000);

    return () => {
      window.clearInterval(timer);
    }

  }, []);

  return (
    <div className={style.card}>
      <div className={style.title}>{cardName} Gold</div>
      {/* <div className={style.cardName}>{cardName}</div> */}
      <img className={style.chip} src={chipImg} alt="chip" />
      <div className={style.cardNumber}>{cardNumber}</div>
      <img className={`${style.logo} ${cardName.replace(' ','')}`} src={cardLogo} alt="logo" />
      <div className={style.userName}>{userName}</div>
      <div className={style.validDateTitle}>GOOD THRU</div>
      <div className={style.validDate}>{toDate}</div>
    </div>
  )
}

export default Card;
