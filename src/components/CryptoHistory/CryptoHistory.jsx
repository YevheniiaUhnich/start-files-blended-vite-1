import style from './CryptoHistory.module.css';
import { format } from 'date-fns';

const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, price, amount, date }, index) => {
          const formattedDate = format(new Date(date), 'Pp');
          return (
            <tr key={id} className={style.tr}>
              <td className={style.td}>{index + 1}</td>
              <td className={style.td}>{price}</td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>{formattedDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
