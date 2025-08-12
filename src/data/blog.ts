import fs from "fs";
import matter from "gray-matter";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  // Simple markdown to HTML conversion without external plugins
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Line breaks
    .replace(/\n/g, '<br>')
    // Lists
    .replace(/^- (.*$)/gim, '<li>$1</li>');

  // Handle lists separately to avoid regex flag issues
  const lines = html.split('<br>');
  let inList = false;
  let listItems = [];
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<li>')) {
      if (!inList) {
        inList = true;
        listItems = [];
      }
      listItems.push(lines[i]);
    } else {
      if (inList) {
        inList = false;
        if (listItems.length > 0) {
          const listHtml = '<ul>' + listItems.join('') + '</ul>';
          // Replace the list items with the complete list
          for (let j = 0; j < listItems.length; j++) {
            const itemIndex = lines.indexOf(listItems[j]);
            if (itemIndex !== -1) {
              lines[itemIndex] = j === 0 ? listHtml : '';
            }
          }
        }
      }
    }
  }

  return lines.filter(line => line !== '').join('<br>');
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    }),
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}
