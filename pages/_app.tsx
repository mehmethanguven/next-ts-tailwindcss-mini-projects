import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
