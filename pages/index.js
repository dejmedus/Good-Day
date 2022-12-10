import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tracker from '../components//Tracker'
import AuthChecker from '../components//AuthChecker'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Study Tracker</title>
        <meta name="description" content="Habit tracker for notion!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Habit tracker for Notion!</h1>
        <Tracker />
        <AuthChecker />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/dejmedus"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source Code
        </a>
      </footer>
    </div>
  )
}
