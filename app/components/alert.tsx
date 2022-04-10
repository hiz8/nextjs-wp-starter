import Container from './container';
import * as styles from './alert.css';

type Props = {
  preview: boolean;
};
export default function Alert({ preview }: Props) {
  if (!preview) {
    return null;
  }

  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.message}>
          This is a page preview. <a href="/api/exit-preview">Click here</a> to
          exit preview mode.
        </div>
      </Container>
    </div>
  );
}
