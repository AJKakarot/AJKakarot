import { getBlogPosts, getPost } from "@/data/blog";
import type { Metadata } from "next";
import Link from "next/link";
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

  const date = new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section id="blog" className="space-y-10">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <span aria-hidden>←</span>
        <span>All blog@s</span>
      </Link>

      <header className="max-w-[680px] space-y-4 border-b border-foreground/10 pb-8">
        <time className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {date}
        </time>
        <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          {post.metadata.title}
        </h1>
        {post.metadata.summary && (
          <p className="text-pretty text-base leading-relaxed text-muted-foreground">
            {post.metadata.summary}
          </p>
        )}
      </header>

      <article
        className="prose prose-neutral max-w-[680px] dark:prose-invert
        prose-headings:font-display prose-headings:font-normal prose-headings:tracking-tight
        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-[16px] prose-p:leading-[1.75] prose-p:text-foreground/85
        prose-li:text-[16px] prose-li:leading-[1.75] prose-li:text-foreground/85
        prose-strong:font-semibold prose-strong:text-foreground
        prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-a:decoration-foreground/30 hover:prose-a:decoration-foreground
        prose-blockquote:border-l-foreground/30 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-foreground/70
        prose-code:font-mono prose-code:text-[13px] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none"
        dangerouslySetInnerHTML={{ __html: post.source }}
      />
    </section>
  );
}
