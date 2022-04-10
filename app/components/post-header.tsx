import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';
import Categories from '../components/categories';
import * as styles from './post-header.css';

type Props = {
  title: string;
  coverImage: any;
  date: any;
  author: any;
  categories: any;
};
export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className={styles.avatarPC}>
        <Avatar author={author} />
      </div>
      {coverImage && (
        <div className={styles.coverImage}>
          <CoverImage title={title} coverImage={coverImage} />
        </div>
      )}
      <div className={styles.postMeta}>
        <div className={styles.avatarMobile}>
          <Avatar author={author} />
        </div>
        <div className={styles.postMetaInner}>
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  );
}
