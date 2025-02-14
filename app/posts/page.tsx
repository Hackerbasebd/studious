import Link from "next/link"
import { getPosts } from "../../lib/posts"
import Pagination from "../../components/Pagination"

const POSTS_PER_PAGE = 12

export default async function Posts({ searchParams }) {
  const page = Number.parseInt(searchParams.page) || 1
  const posts = await getPosts()
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const paginatedPosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedPosts.map((post) => (
          <Link key={post.slug} href={`/post/${post.slug}`} className="block">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
}

