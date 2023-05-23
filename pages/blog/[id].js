import { client } from '@/libs/client';

import styles from '../../styles/Home.module.scss';


export default function BlogId({ blog }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <p>{blog.category && blog.category.name}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className={styles.post}
      />
    </main>
  );
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
}

export async function getStaticPaths() {
  const data = await client.get({
    endpoint: 'blog',
  });

  const paths = data.contents.map((item) => ({ params: { id: item.id } }));

  return {
    paths,
    fallback: 'blocking'
  };
}
