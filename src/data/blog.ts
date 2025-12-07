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
  // First, protect code blocks by replacing them with placeholders
  const codeBlocks: string[] = [];
  let codeBlockIndex = 0;
  
  // Extract and store code blocks
  let processedMarkdown = markdown.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    const language = lang || 'plaintext';
    // Escape HTML in code
    const escapedCode = code
      .trim()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
    
    const codeBlock = `<div class="my-6"><pre class="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto border border-gray-700"><code class="language-${language} text-sm block whitespace-pre font-mono text-gray-100">${escapedCode}</code></pre></div>`;
    codeBlocks.push(codeBlock);
    return `___CODE_BLOCK_${codeBlockIndex++}___`;
  });
  
  // Now process the rest of the markdown
  let html = processedMarkdown
    // Horizontal rules
    .replace(/^---$/gim, '<hr class="my-8 border-gray-300 dark:border-gray-700">')
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    // Images (before links to avoid conflicts)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-lg my-6 w-full h-auto" />')
    // Bold (before italic to handle ** correctly)
    .replace(/\*\*([^\*]+)\*\*/g, '<strong class="font-semibold">$1</strong>')
    // Italic
    .replace(/\*([^\*]+)\*/g, '<em class="italic">$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400">$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">$1</a>')
    // Lists (numbered)
    .replace(/^\d+\.\s+(.*$)/gim, '<li class="ml-4">$1</li>')
    // Lists (bullet)
    .replace(/^[\-\*]\s+(.*$)/gim, '<li class="ml-4">$1</li>')
    // Paragraphs - convert double line breaks to paragraph breaks
    .replace(/\n\n+/g, '</p><p class="my-4">')
    // Single line breaks
    .replace(/\n/g, '<br>');

  // Handle lists separately to avoid regex flag issues
  const lines = html.split('<br>');
  let inList = false;
  let listItems: string[] = [];
  let listType = 'ul'; // 'ul' or 'ol'
  
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
          const listHtml = `<${listType} class="list-disc ml-6 my-4 space-y-2">${listItems.join('')}</${listType}>`;
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

  // Wrap content in paragraph if not already wrapped
  let result = '<p class="my-4">' + lines.filter(line => line !== '').join('<br>') + '</p>';
  
  // Restore code blocks
  codeBlocks.forEach((block, index) => {
    result = result.replace(`___CODE_BLOCK_${index}___`, block);
  });
  
  // Clean up empty paragraphs and fix paragraph spacing around block elements
  result = result
    .replace(/<p class="my-4"><\/p>/g, '')
    .replace(/<p class="my-4">(<h[1-6]|<div|<pre|<ul|<ol|<hr|<img)/g, '$1')
    .replace(/(<\/h[1-6]>|<\/div>|<\/pre>|<\/ul>|<\/ol>|<hr[^>]*>|<img[^>]*>)<\/p>/g, '$1')
    .replace(/<p class="my-4">(<br>)+/g, '<p class="my-4">')
    .replace(/(<br>)+<\/p>/g, '</p>');

  return result;
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
