"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the email to your backend or newsletter service
    // For this example, we'll just show a success message
    setMessage("Thank you for subscribing!")
    setEmail("")
  }

  return (
    <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Stay updated with the latest Telegram channel recommendations!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-r-md hover:bg-primary-dark transition-colors duration-200 flex items-center"
          >
            Subscribe
            <Send className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
      {message && <p className="mt-4 text-green-600 dark:text-green-400">{message}</p>}
    </div>
  )
}

