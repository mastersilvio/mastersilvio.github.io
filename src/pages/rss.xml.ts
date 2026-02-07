import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.published)
    .sort((a, b) => {
      const dateA = a.data.date ?? new Date(0);
      const dateB = b.data.date ?? new Date(0);
      return dateB.getTime() - dateA.getTime();
    });

  return rss({
    title: "Sílvio Meireles",
    description: "Personal Blog by Sílvio Meireles",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/${post.id}/`,
    })),
  });
}
