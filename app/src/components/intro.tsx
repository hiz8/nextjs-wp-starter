import { CMS_NAME, CMS_URL } from '../lib/constants';
import * as styles from './intro.css';

export default function Intro() {
  return (
    <section className={styles.root}>
      <h1 className={styles.headline}>Blog.</h1>
      <h4 className={styles.subHeadline}>
        A statically generated blog example using{' '}
        <a className={styles.anchorLink} href="https://nextjs.org/">
          Next.js
        </a>{' '}
        and{' '}
        <a className={styles.anchorLink} href={CMS_URL}>
          {CMS_NAME}
        </a>
        .
      </h4>
    </section>
  );
}
