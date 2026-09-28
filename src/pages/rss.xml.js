import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection('post');
  return rss({
    title: 'PrepNAce | Academic Excellence & Success',
    description: 'Ideas and guidance on learning, exam preparation, student life and skills.',
    site: context.site,
    items: blog.map((post) => {
      const link = `/blog/${post.id}/`;
      return {
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
        link,
        stylesheet: '/rss/pretty-feed-v3.xsl',
      };
    }),
  });
}