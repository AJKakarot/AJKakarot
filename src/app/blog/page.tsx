import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Writing",
  description: "Notes on software, systems, and the occasional rabbit hole.",
};

const BLUR_FADE_DELAY = 0.04;

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const sorted = posts.sort((a, b) =>
    new Date(b.metadata.publishedAt).getTime() -
    new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <section className="space-y-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="space-y-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Writing / {sorted.length} {sorted.length === 1 ? "post" : "posts"}
          </span>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Blogs.
          </h1>
          <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
            Half-formed ideas, system deep dives, and lessons from shipping at
            startup speed.
          </p>
        </div>
      </BlurFade>

      <div className="divide-y divide-foreground/10 border-t border-foreground/10">
        {sorted.map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 py-6 transition-colors hover:bg-foreground/[0.02]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-xl leading-snug tracking-tight transition-colors group-hover:text-foreground/70 sm:text-2xl">
                  {post.metadata.title}
                </h2>
                <time className="shrink-0 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {formatDate(post.metadata.publishedAt)}
                </time>
              </div>
              {post.metadata.summary && (
                <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
                  {post.metadata.summary}
                </p>
              )}
              <span
                aria-hidden
                className="font-display text-base italic text-foreground/30 transition-all group-hover:translate-x-1 group-hover:text-foreground/70"
              >
                Read →
              </span>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
