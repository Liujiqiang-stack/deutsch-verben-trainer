import Head from 'next/head';

const topNews = [
  {
    category: '中国',
    title: '中欧班列持续增长，波兰成为关键枢纽',
    summary: '中波物流合作不断加深，为中东欧贸易注入新动能。',
  },
  {
    category: '波兰',
    title: '华沙科技周聚焦人工智能与教育创新',
    summary: '中波高校与企业展开交流，推动青年人才合作计划。',
  },
  {
    category: '文化',
    title: '“你好中国”文化节在克拉科夫开幕',
    summary: '活动包含电影展映、书法体验与美食品鉴，吸引众多市民参与。',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>中波新闻APP · Sino-Polish News</title>
      </Head>

      <header style={styles.header}>
        <div style={styles.brand}>中波新闻APP</div>
        <nav style={styles.nav}>
          <a href="/" style={styles.link}>首页</a>
          <a href="/stories" style={styles.link}>专题</a>
          <a href="/kontakt" style={styles.link}>联系</a>
        </nav>
      </header>

      <main style={styles.main}>
        <section style={styles.hero}>
          <h1 style={styles.title}>中波新闻 · 一屏掌握</h1>
          <p style={styles.subtitle}>聚焦中国与波兰的经济、文化与科技动态。</p>
        </section>

        <section style={styles.newsGrid}>
          {topNews.map((item) => (
            <article key={item.title} style={styles.card}>
              <span style={styles.tag}>{item.category}</span>
              <h2 style={styles.cardTitle}>{item.title}</h2>
              <p style={styles.cardSummary}>{item.summary}</p>
            </article>
          ))}
        </section>
      </main>

      <footer style={styles.footer}>© 2026 中波新闻APP</footer>
    </>
  );
}

const styles = {
  header: {
    backgroundColor: '#b30000',
    color: '#fff',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '12px',
  },
  brand: {
    fontSize: '24px',
    fontWeight: 700,
  },
  nav: {
    display: 'flex',
    gap: '24px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
  },
  main: {
    minHeight: 'calc(100vh - 140px)',
    background: '#fff7f7',
    padding: '32px 24px 48px',
  },
  hero: {
    margin: '0 auto 24px',
    maxWidth: '900px',
    textAlign: 'center',
  },
  title: {
    margin: '0 0 12px',
    color: '#8b0000',
    fontSize: '40px',
  },
  subtitle: {
    margin: 0,
    color: '#333',
    fontSize: '18px',
  },
  newsGrid: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '16px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    border: '1px solid #ffd6d6',
    padding: '18px',
    boxShadow: '0 4px 12px rgba(179, 0, 0, 0.08)',
  },
  tag: {
    display: 'inline-block',
    marginBottom: '10px',
    backgroundColor: '#ffe5e5',
    color: '#b30000',
    borderRadius: '999px',
    padding: '4px 10px',
    fontSize: '12px',
    fontWeight: 700,
  },
  cardTitle: {
    margin: '0 0 8px',
    fontSize: '20px',
    color: '#1f1f1f',
  },
  cardSummary: {
    margin: 0,
    lineHeight: 1.5,
    color: '#555',
  },
  footer: {
    textAlign: 'center',
    padding: '16px',
    color: '#666',
    backgroundColor: '#fff',
    borderTop: '1px solid #f0f0f0',
  },
};
