import Link from "next/link"
import { getPosts } from "../../../lib/posts"

export default async function Category({ params }: { params: { category: string } }) {
  const posts = await getPosts()
  const categoryPosts = posts.filter((post) => post.category === params.category)

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Posts in {params.category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryPosts.map((post) => (
          <Link key={post.slug} href={`/post/${post.slug}`} className="block">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

