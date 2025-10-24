import { getBlogPosts, getPost } from "@/data/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `/blog/${post.slug}`,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog">
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
      <article
        className="prose prose-neutral dark:prose-invert max-w-[650px] 
        prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl 
        prose-p:text-base prose-p:leading-7 prose-p:my-4
        prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 
        prose-code:text-sm prose-code:font-mono
        prose-a:text-blue-600 dark:prose-a:text-blue-400
        prose-strong:font-semibold prose-ul:my-4"
        dangerouslySetInnerHTML={{ __html: post.source }}
      />
    </section>
  );
}
