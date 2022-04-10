import * as styles from './tags.css';

type Props = {
  tags: any;
};
export default function Tags({ tags }: Props) {
  return (
    <div className={styles.root}>
      <p className={styles.tagHolder}>
        Tagged
        {tags.edges.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag.node.name}
          </span>
        ))}
      </p>
    </div>
  );
}
