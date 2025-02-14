import { MessageCircle } from "lucide-react"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <MessageCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About TeleChannels</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Your go-to resource for discovering the best Telegram channels
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Welcome to TeleChannels, your go-to resource for discovering the best Telegram channels across various
          categories. Our mission is to help you find valuable, entertaining, and informative content on one of the
          world's most popular messaging platforms.
        </p>
        <p>
          Our team of experts curates and reviews hundreds of Telegram channels to bring you the cream of the crop.
          Whether you're interested in news, technology, entertainment, education, or any other topic, we've got you
          covered.
        </p>
        <p>
          We believe in the power of community and information sharing. That's why we're committed to providing you with
          honest, unbiased reviews and recommendations. Our goal is to help you make the most of your Telegram
          experience by connecting you with channels that align with your interests and needs.
        </p>
        <p>
          Thank you for visiting our site. We hope you find it useful and informative. If you have any questions or
          suggestions, please don't hesitate to contact us.
        </p>
      </div>
    </div>
  )
}

