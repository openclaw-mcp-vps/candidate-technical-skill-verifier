import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Candidate Technical Skill Verifier',
  description: 'Verify candidate technical skills through AI-powered code analysis of GitHub repos and coding samples.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7a2a86ca-cd84-4f3a-ab60-9ffa18afa974"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
