import styles from './StatisticsItem.module.css';

const StatisticsItem = ({ icons, counter, text }) => {
  return (
    <li className={styles.statisticsItem}>
      {icons}
      <span className={styles.counter}>{counter}</span>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

export default StatisticsItem;
