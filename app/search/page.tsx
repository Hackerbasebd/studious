import { searchPosts } from "../../lib/posts"
import Link from "next/link"

export default async function SearchResults({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q
  const results = await searchPosts(query)

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Search Results for "{query}"</h1>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((post) => (
            <Link key={post.slug} href={`/post/${post.slug}`} className="block">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No results found for "{query}"</p>
      )}
    </div>
  )
}

