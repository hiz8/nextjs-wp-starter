import * as styles from './avatar.css';

type Props = {
  author: any;
};
export default function Avatar({ author }: Props) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null;

  return (
    <div className={styles.root}>
      <div className={styles.imageWrapper}>
        {author.avatar.url && (
          <img src={author.avatar.url} className={styles.image} alt={name} />
        )}
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
}
