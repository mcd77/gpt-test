import Link from 'next/link';
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
      <h1>Welcome to my Next.js Blog</h1>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/${id}`}>{title}</Link> ({date})
          </li>
        ))}
      </ul>
    </div>
  );
}
