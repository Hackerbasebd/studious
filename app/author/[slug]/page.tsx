import Image from "next/image"
import Link from "next/link"
import { getAuthorBySlug, getAuthorPosts } from "../../../lib/authors"

export default async function AuthorProfile({ params }: { params: { slug: string } }) {
  const author = await getAuthorBySlug(params.slug)
  const posts = await getAuthorPosts(params.slug)

  if (!author) {
    return <div>Author not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center mb-8">
        <Image
          src={author.avatar || "/placeholder-avatar.svg"}
          alt={author.name}
          width={100}
          height={100}
          className="rounded-full mr-6"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{author.name}</h1>
          <p className="text-gray-600 dark:text-gray-400">{author.bio}</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Posts by {author.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/post/${post.slug}`} className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

