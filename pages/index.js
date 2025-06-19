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
        <title >Chris's Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.textSection}>
        <div className={styles.overlay}>
          <section className={styles.blogIntro}>
            <h2 className={styles.mainHeader}>Research, projects, and thoughts</h2>
            <p className={styles.introParagraph} >
              This blog is a living journal where I explore new ideas, share technical deep dives,
              document personal projects, and reflect on the process of building and learning.
              Whether it’s experimenting with cutting-edge tools, solving real-world problems,
              or just trying to make sense of a complex concept, I aim to capture the journey
              with clarity and curiosity.
            </p>
            <p className={styles.introParagraph}>
              If you’re into code, creativity, and continuous learning — welcome. You’re in good company.
            </p>
          </section>
        </div>
      </header>

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Latest Posts</h2>
        <div className={styles.postGrid}>
          {allPostsData.map(({ id, title, date, description }) => (
            <div key={id} className={styles.postCard}>
              <Link href={`/${id}`}>
                <Image
                  src={`/gpt-test/images/${id}.jpg`}
                  alt={title}
                  width={600}
                  height={350}
                  className={styles.postImage}
                  style={{ width: '100%', height: 'auto' }} 
                />
              </Link>
              <div className={styles.postContent}>
                <h3>
                  <Link href={`/${id}`}>{title}</Link>
                </h3>
                <p className={styles.postDate}>{date}</p>
                <p className={styles.introParagraph}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
