"use client"

import { DiscussionEmbed } from "disqus-react"
import { useTheme } from "next-themes"

interface DisqusProps {
  shortname: string
  config: {
    url: string
    identifier: string
    title: string
  }
}

export default function Disqus({ shortname, config }: DisqusProps) {
  const { theme } = useTheme()

  return (
    <div className={theme === "dark" ? "disqus-dark" : ""}>
      <DiscussionEmbed shortname={shortname} config={config} />
    </div>
  )
}

