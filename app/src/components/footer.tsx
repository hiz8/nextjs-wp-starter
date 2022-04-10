import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';
import * as styles from './footer.css';

export default function Footer() {
  return (
    <footer className={styles.root}>
      <Container>
        <div className={styles.inner}>
          <h3 className={styles.headline}>
            Statically Generated with Next.js.
          </h3>
          <div>
            <a href="https://nextjs.org/docs/basic-features/pages">
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
