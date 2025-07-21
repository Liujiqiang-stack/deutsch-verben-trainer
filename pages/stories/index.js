import { getAllStories } from '../../lib/getStories';
import ReactMarkdown from 'react-markdown';

export async function getStaticProps() {
  const stories = getAllStories();
  return {
    props: {
      stories,
    },
  };
}

export default function StoriesPage({ stories }) {
  console.log('Stories 内容为：', stories);
  
  return (
    <div style={{ padding: '40px' }}>
      <h1>关于我们</h1>
      {stories.map((story) => (
        <div key={story.slug} style={{ marginBottom: '40px' }}>
          <h2>{story.title}</h2>
          <p>{story.date}</p>
          <ReactMarkdown>{story.content}</ReactMarkdown>

        </div>
      ))}
    </div>
  );
}



