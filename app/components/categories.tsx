import * as styles from './categories.css';

type CategoriesProps = {
  categories: any;
};
export default function Categories({ categories }: CategoriesProps) {
  return (
    <span className={styles.root}>
      under
      {categories.edges.length > 0 ? (
        categories.edges.map((category: any, index: number) => (
          <span key={index} className={styles.category}>
            {category.node.name}
          </span>
        ))
      ) : (
        <span className={styles.category}>{categories.edges.node.name}</span>
      )}
    </span>
  );
}
