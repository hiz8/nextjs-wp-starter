import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import Link from 'next/link';
import * as styles from './hero-post.css';

type Props = {
  title: any;
  coverImage: any;
  date: any;
  excerpt: any;
  author: any;
  slug: any;
};
export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className={styles.coverImage}>
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className={styles.postInfo}>
        <div>
          <h3 className={styles.headline}>
            <Link href={`/posts/${slug}`}>
              <a
                className={styles.anchorLink}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </h3>
          <div className={styles.date}>
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <div
            className={styles.excerpt}
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Avatar author={author} />
        </div>
      </div>
    </section>
  );
}
