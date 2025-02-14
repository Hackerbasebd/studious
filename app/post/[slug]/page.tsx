import Image from "next/image"
import Link from "next/link"
import { getPostBySlug, getRelatedPosts } from "../../../lib/posts"
import BlogPostSchema from "../../../components/BlogPostSchema"
import SocialShare from "../../../components/SocialShare"
import { Calendar, Clock, User } from "lucide-react"
import RelatedPosts from "../../../components/RelatedPosts"
import TagList from "../../../components/TagList"
import Disqus from "../../../components/Disqus"

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  const url = `https://yourdomain.com/post/${post.slug}`
  const relatedPosts = await getRelatedPosts(post.slug, post.tags)
  const readingTime = Math.ceil(post.content.split(" ").length / 200) // Assuming 200 words per minute

  const disqusConfig = {
    url: url,
    identifier: post.slug,
    title: post.title,
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <BlogPostSchema post={post} />
      <div className="mb-8">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          width={1200}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
      <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-6 gap-4">
        <div className="flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 mr-2" />
          <span>{readingTime} min read</span>
        </div>
        <div className="flex items-center">
          <User className="h-5 w-5 mr-2" />
          <Link href={`/author/${post.author.slug}`} className="hover:underline">
            {post.author.name}
          </Link>
        </div>
      </div>
      <TagList tags={post.tags} />
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      <SocialShare url={url} title={post.title} />
      <RelatedPosts posts={relatedPosts} />
      <div className="mt-12">
        <Disqus shortname="your-disqus-shortname" config={disqusConfig} />
      </div>
    </article>
  )
}

