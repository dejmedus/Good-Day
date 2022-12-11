import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from '../components/Main'
import Image from 'next/image'
import github from '../assets/images/github.png'
import { useSession, signOut } from "next-auth/react"


export default function Home() {
  const { data: session, status } = useSession()

  return (
    <div>
      <Head>
        <title>Good Day</title>
        <meta name="description" content="Custom habit trackers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Habit tracker for Notion!</h1>
        <Main session={session} status={status} />
      </main>

      <div className={styles.customShapeDivider}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
        </svg>
      </div>
      <footer className={styles.footer}>
        {status == 'authenticated'
          ? <button onClick={() => signOut()}>Signout</button>
          : null}
        <a
          href="https://github.com/dejmedus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={github} width={24} height={24} alt='github icon'></Image>
        </a>
      </footer>
    </div>
  )
}
