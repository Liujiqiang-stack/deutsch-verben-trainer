const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const storiesDirectory = path.join(process.cwd(), 'content');

function getAllStories() {
  const fileNames = fs.readdirSync(storiesDirectory);
  return fileNames.map((fileName) => {
    const fullPath = path.join(storiesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug: fileName.replace(/\.md$/, ''),
      ...data,
      content,
    };
  });
}

module.exports = { getAllStories };
