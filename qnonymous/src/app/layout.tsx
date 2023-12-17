import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/Header'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={notoSansJP.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header />
        {children}
        </ThemeProvider>
    </div>
  )
}