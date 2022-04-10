import PostPreview from '../components/post-preview';
import * as styles from './more-stories.css';

type Props = {
  posts: any;
};
export default function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className={styles.headline}>More Stories</h2>
      <div className={styles.postList}>
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage?.node}
            date={node.date}
            author={node.author?.node}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
