import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/Home.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
    <Layout>
      <ul className={styles.postList}></ul>
    <div>
      <h1>Welcome to my Next.js Blog</h1>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/${id}`}>{title}</Link> ({date})
          </li>
        ))}
      </ul>
    </div>
    </Layout>
    </div>
  );
}
