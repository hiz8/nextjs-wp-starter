import * as styles from './post-title.css';

type Props = {
  children: string;
};
export default function PostTitle({ children }: Props) {
  return (
    <h1
      className={styles.headline}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
