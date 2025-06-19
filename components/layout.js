import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }) {
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
            <Link href="/">My Blog</Link>
          </h1>
          <button className="menu-toggle" onClick={toggleMenu}>☰</button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>&copy; 2025 My Blog</footer>
    </div>
  );
}
