import fs from "fs"
import path from "path"
import matter from "gray-matter"

const authorsDirectory = path.join(process.cwd(), "authors")

export async function getAuthorBySlug(slug: string) {
  const fullPath = path.join(authorsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data } = matter(fileContents)
  return {
    slug,
    ...data,
  }
}

export async function getAuthorPosts(authorSlug: string) {
  const fileNames = fs.readdirSync(path.join(process.cwd(), "posts"))
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(process.cwd(), "posts", fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(fileContents)
      return {
        slug,
        ...data,
      }
    }),
  )

  return allPostsData.filter((post) => post.author.slug === authorSlug)
}

