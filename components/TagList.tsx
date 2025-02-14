import Link from "next/link"

export default function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/tag/${tag}`}
          className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
        >
          #{tag}
        </Link>
      ))}
    </div>
  )
}

