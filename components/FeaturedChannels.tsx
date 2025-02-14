import Image from "next/image"
import Link from "next/link"

const featuredChannels = [
  {
    name: "TechInsights",
    description: "Latest news and insights from the tech world",
    subscribers: "250K",
    image: "/tech-insights.jpg",
    url: "https://t.me/techinsights",
  },
  {
    name: "Global News 24/7",
    description: "Breaking news from around the globe",
    subscribers: "500K",
    image: "/global-news.jpg",
    url: "https://t.me/globalnews247",
  },
  {
    name: "Fitness Motivation",
    description: "Daily workouts and health tips",
    subscribers: "150K",
    image: "/fitness-motivation.jpg",
    url: "https://t.me/fitnessmotivation",
  },
  {
    name: "Crypto Updates",
    description: "Latest cryptocurrency news and analysis",
    subscribers: "300K",
    image: "/crypto-updates.jpg",
    url: "https://t.me/cryptoupdates",
  },
]

export default function FeaturedChannels() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Featured Telegram Channels</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredChannels.map((channel) => (
          <div
            key={channel.name}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={channel.image || "/placeholder.svg"}
              alt={channel.name}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{channel.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{channel.description}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{channel.subscribers} subscribers</p>
              <Link
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-200"
              >
                Join Channel
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

