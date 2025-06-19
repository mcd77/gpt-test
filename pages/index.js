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
      <img src="/header.svg" alt="Chris" className={styles.headerImage} />
      <p className={styles.tagline}>
        This is Chris's blog and will document my research and projects.
      </p>
      <div className={styles.postGrid}>
        {allPostsData.map(({ id, title, date, description }) => (
          <div key={id} className={styles.postCard}>
            <h2>
              <Link href={`/${id}`}>{title}</Link>
            </h2>
            <p>{description}</p>
            <p>
              <small>{date}</small>
            </p>
          </div>
        ))}
      </div>


      <h1>Welcome to my Next.js Blog</h1>
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
