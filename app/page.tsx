import Link from "next/link"
import { getPosts } from "../lib/posts"
import FeaturedPosts from "../components/FeaturedPosts"
import CategoryList from "../components/CategoryList"
import SearchBar from "../components/SearchBar"
import NewsletterForm from "../components/NewsletterForm"
import FeaturedChannels from "../components/FeaturedChannels"
import { ArrowRight } from "lucide-react"

export default async function Home() {
  const posts = await getPosts()
  const featuredPosts = posts.slice(0, 3)
  const categories = [...new Set(posts.map((post) => post.category))]

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Discover Top Telegram Channels
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Explore the best Telegram channels across various categories, curated just for you.
        </p>
      </div>
      <SearchBar />
      <FeaturedPosts posts={featuredPosts} />
      <CategoryList categories={categories} />
      <FeaturedChannels />
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post) => (
            <Link key={post.slug} href={`/post/${post.slug}`} className="block">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                  <div className="mt-4 flex items-center text-primary">
                    <span className="text-sm font-medium">Read more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/posts"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <NewsletterForm />
    </div>
  )
}

