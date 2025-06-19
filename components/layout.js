import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <h1>My Blog</h1>
      </header>
      <main>{children}</main>
      <footer>&copy; 2025 My Blog</footer>
    </div>
  );
}
