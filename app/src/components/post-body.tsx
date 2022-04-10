import * as styles from './post-body.css';

type Props = {
  content: string;
};
export default function PostBody({ content }: Props) {
  return (
    <div className={styles.root}>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
