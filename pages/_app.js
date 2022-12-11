import { SessionProvider } from "next-auth/react"
import { Edu_NSW_ACT_Foundation } from '@next/font/google'
import '../styles/globals.css'


const edu = Edu_NSW_ACT_Foundation({
  subsets: ['latin'],
})

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return <SessionProvider session={session}>
    <main className={edu.className}>
      <Component {...pageProps} />
    </main>
  </SessionProvider>
}

export default MyApp



