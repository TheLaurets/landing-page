import "../styles/globals.css"

import Head from "next/head"
import { Header } from "@components/Header"

export const metadata = {
  title: 'Next Production Starter',
  description: 'A Next.js starter for production-ready projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body >
        <Header />
        {children}
      </body>
    </html>
  )
}
