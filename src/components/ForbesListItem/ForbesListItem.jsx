import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import clsx from 'clsx';
import style from './ForbesListItem.module.css';

const ForbesListItem = ({ name, capital, avatar, isIncrease }) => {
  return (
    <li className={style.listItem}>
      <img className={style.avatar} src={avatar} alt="avatar" />
      <h3 className={style.title}>{name}</h3>

      <span className={style.capital}>
        {capital}
        <BiDollarCircle className={style.icons} />
        {isIncrease ? (
          <FcBullish className={clsx(style.status, style.green)} />
        ) : (
          <FcBearish className={clsx(style.status, style.red)} />
        )}
      </span>
    </li>
  );
};

export default ForbesListItem;
