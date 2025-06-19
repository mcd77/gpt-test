import Link from 'next/link';
import Layout from './components/layout';
import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/Home.module.css';

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
    <Layout>
      <ul className={styles.postList}>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/${id}`}>{title}</Link> ({date})
          </li>
        ))}
      </ul>
    </Layout>
  );
}
