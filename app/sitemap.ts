import { getPosts } from "../lib/posts"

export default async function sitemap() {
  const posts = await getPosts()
  const baseUrl = "https://your-domain.com"

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postUrls,
  ]
}

