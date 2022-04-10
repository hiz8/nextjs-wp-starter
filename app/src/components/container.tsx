import type { ReactNode } from 'react';
import * as styles from './container.css';

type Props = {
  children: ReactNode;
};
export default function Container({ children }: Props) {
  return <div className={styles.root}>{children}</div>;
}
