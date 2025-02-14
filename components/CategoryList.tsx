import Link from "next/link"

export default function CategoryList({ categories }) {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Categories</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/categories/${category}`}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 shadow-md"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  )
}

