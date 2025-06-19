import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
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
      <Head>
        <title>Chris's Blog</title>
      </Head>

      <header className={styles.hero}>
        <div className={styles.overlay}>
          <h1>Welcome to Chris's Blog</h1>
          <p>Research, projects, and thoughts—coded and documented with care.</p>
        </div>
      </header>

      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Latest Posts</h2>
        <div className={styles.postGrid}>
          {allPostsData.map(({ id, title, date, description }) => (
            <div key={id} className={styles.postCard}>
              <Link href={`/${id}`}>
                <Image
                  src={`/images/${id}.jpg`}
                  alt={title}
                  width={600}
                  height={350}
                  className={styles.postImage}
                />
              </Link>
              <div className={styles.postContent}>
                <h3>
                  <Link href={`/${id}`}>{title}</Link>
                </h3>
                <p className={styles.postDate}>{date}</p>
                <p className={styles.postDescription}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
