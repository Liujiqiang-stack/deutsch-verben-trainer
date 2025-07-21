// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>连接世界 · Verbinde die Welt</title>
      </Head>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <a href="#" style={styles.link}>首页 / Startseite</a>
          <a href="#" style={styles.link}>关于我们 / Über uns</a>
          <a href="#" style={styles.link}>联系 / Kontakt</a>
        </nav>
      </header>
      <main style={styles.main}>
        <h1 style={styles.title}>中文 · 连接世界</h1>
        <p style={styles.subtitle}>Chinesisch verbindet die Welt</p>
      </main>
      <footer style={styles.footer}>
        © 2025 刘继强 · Jiqiang Liu
      </footer>
    </>
  );
}

const styles = {
  header: {
    backgroundColor: '#b22222', // 深红色
    padding: '20px 0',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  main: {
    height: 'calc(100vh - 160px)',
    background: 'linear-gradient(to bottom right, #ff4d4f, #ffe6e6)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: '48px',
    color: '#8b0000',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '24px',
    color: '#333',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    color: '#888',
  }
};


