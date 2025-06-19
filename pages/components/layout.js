const Head = require('next/head');
const Link = require('next/link');
const { useState } = require('react');

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <nav className="navbar">
          <h1 className="site-title">
            <Link href="/">Chris's Blog</Link>
          </h1>
        </nav>
      </header>
      <main>{children}</main>
      <footer>&copy; 2025 My Blog</footer>
    </div>
  );
}

module.exports = Layout;
