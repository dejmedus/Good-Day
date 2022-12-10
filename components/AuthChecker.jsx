import { useSession, signIn, signOut } from "next-auth/react"
import styles from '../styles/AuthChecker.module.css'

export default function AuthChecker() {
    const { data: session, loading } = useSession()

    return (
        <div className={styles.container}>
            {loading
                ? <h3>loading...</h3>
                : session

                    ? <>
                        <h3>Heya {session.user.name} 👋</h3>
                        <button onClick={() => signOut()}>Sign out</button>
                    </>
                    : <>
                        <h3>Sign in to create trackers!</h3>
                        <button onClick={() => signIn()}>Sign in</button>
                    </>
            }
        </div>
    )
}