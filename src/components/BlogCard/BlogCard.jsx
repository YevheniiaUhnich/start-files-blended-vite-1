import styles from './BlogCard.module.css';
import { format } from 'date-fns';

const BlogCard = ({
  name,
  postedAt,
  poster,
  tag,
  title,
  description,
  avatar,
}) => {
  const formattedDate = format(new Date(postedAt), 'dd.MM.yyyy');
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.cardPoster} src={poster} alt="card__image" />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.tag}>{tag}</span>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardText}>{description}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.userBox}>
          <img className={styles.avatar} src={avatar} alt="name" />
          <div>
            <h3 className={styles.userName}>{name}</h3>
            <small className={styles.date}>{formattedDate}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
