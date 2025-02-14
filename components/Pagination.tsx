import Link from "next/link"

export default function Pagination({ currentPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="mt-8 flex justify-center">
      <ul className="flex space-x-2">
        {pages.map((page) => (
          <li key={page}>
            <Link
              href={`/posts?page=${page}`}
              className={`px-3 py-2 rounded-md ${
                currentPage === page
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

