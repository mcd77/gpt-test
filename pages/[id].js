import Head from 'next/head';
import Layout from './components/layout';
import styles from '../styles/Home.module.css';



import { getAllPostIds, getPostData } from '../lib/posts';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
          <Image
           src={`/gpt-test/images/${postData.id}.jpg`}
           alt={title}
           width={600}
           height={350}
           className={styles.postImage}
           />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
