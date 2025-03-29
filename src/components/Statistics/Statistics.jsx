// import { FaRegThumbsUp } from 'react-icons/fa';
// import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GrLike } from 'react-icons/gr';
import { AiOutlineTeam } from 'react-icons/ai';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import styles from './Statistics.module.css';

const data = {
  'Happy Customers': <GrLike className={styles.icons} />,
  'Registered Members': <AiOutlineTeam className={styles.icons} />,
  'Available Products': <MdProductionQuantityLimits className={styles.icons} />,
  'Saved Trees': <GiTreeDoor className={styles.icons} />,
};

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {stats.map(({ id, title, total }) => (
          <li key={id} className={styles.item}>
            {data[title] || <GrLike />}
            <StatisticsItem counter={total} text={title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
