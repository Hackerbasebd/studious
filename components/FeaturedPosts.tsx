import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function FeaturedPosts({ posts }) {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/post/${post.slug}`} className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-primary">
                  <span className="text-sm font-medium">Read more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

