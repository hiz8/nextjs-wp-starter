import type { ReactNode } from 'react';
import Alert from '../components/alert';
import Footer from '../components/footer';
import Meta from '../components/meta';
import * as styles from './layout.css';

type Props = {
  preview: boolean;
  children: ReactNode;
};
export default function Layout({ preview, children }: Props) {
  return (
    <>
      <Meta />
      <div className={styles.contents}>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
