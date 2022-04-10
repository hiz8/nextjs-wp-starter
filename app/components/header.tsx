import Link from 'next/link';
import * as styles from './header.css';

export default function Header() {
  return (
    <h2 className={styles.root}>
      <Link href="/">
        <a className={styles.anchorLink}>Blog</a>
      </Link>
      .
    </h2>
  );
}
