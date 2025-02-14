"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"

export default function Comments({ postSlug }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  const { data: session } = useSession()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the comment to your backend
    // For this example, we'll just add it to the local state
    const comment = {
      id: Date.now(),
      content: newComment,
      author: session.user.name,
      createdAt: new Date().toISOString(),
    }
    setComments([...comments, comment])
    setNewComment("")
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Comments</h2>
      {session ? (
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows={4}
            placeholder="Write a comment..."
            required
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-200"
          >
            Post Comment
          </button>
        </form>
      ) : (
        <p className="mb-8 text-gray-600 dark:text-gray-400">Please sign in to leave a comment.</p>
      )}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-gray-800 dark:text-gray-200">{comment.content}</p>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span>{comment.author}</span> • <time>{new Date(comment.createdAt).toLocaleDateString()}</time>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

