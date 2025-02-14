"use client"

import { TwitterIcon, FacebookIcon, LinkedinIcon } from "lucide-react"

export default function SocialShare({ url, title }) {
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      "_blank",
    )
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
  }

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      "_blank",
    )
  }

  return (
    <div className="flex space-x-4 mt-6">
      <button onClick={shareOnTwitter} className="text-blue-400 hover:text-blue-500">
        <TwitterIcon size={24} />
      </button>
      <button onClick={shareOnFacebook} className="text-blue-600 hover:text-blue-700">
        <FacebookIcon size={24} />
      </button>
      <button onClick={shareOnLinkedIn} className="text-blue-700 hover:text-blue-800">
        <LinkedinIcon size={24} />
      </button>
    </div>
  )
}

