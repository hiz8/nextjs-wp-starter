import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import * as styles from './cover-image.css';

type Props = {
  title: string;
  coverImage: {
    sourceUrl: string;
  };
  slug?: any;
};
export default function CoverImage({ title, coverImage, slug }: Props) {
  // Replace paths during development to avoid image acquisition errors.
  const src = coverImage.sourceUrl.replace('localhost:8000', 'wordpress');
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={src}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );

  return (
    <div className={styles.root}>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
