import { useSession, signIn, signOut } from "next-auth/react"
import styles from '../styles/AuthChecker.module.css'

export default function AuthChecker() {
    const { data: session, status } = useSession()

    return (
        <div className={styles.container}>
            {status === 'loading'
                ? <h3>loading...</h3>
                : status === 'authenticated'

                    ? <>
                        <h3>Heya {session.user.name} 👋</h3>
                        {/* <button onClick={() => signOut()}>Sign out</button> */}
                        {/* <FunButton onClick={() => signOut()} text='Sign out' /> */}
                        <button className={styles.pushable} onClick={() => signOut()}>
                            <span className={styles.shadow}></span>
                            <span className={styles.edge}></span>
                            <span className={styles.front}>
                                Sign out
                            </span>
                        </button>

                    </>
                    : <>
                        <h3>Create your own custom trackers</h3>
                        {/* <button onClick={() => signIn()}>Sign in</button> */}
                        {/* <FunButton onClick={() => signIn()} text='Sign in' /> */}
                        <button className={styles.pushable} onClick={() => signIn()}>
                            <span className={styles.shadow}></span>
                            <span className={styles.edge}></span>
                            <span className={styles.front}>
                                Sign in
                            </span>
                        </button>
                    </>
            }
        </div>
    )
}

const FunButton = (onClick, text) => {
    return (
        <button className={styles.pushable} onClick={onClick}>
            <span className={styles.shadow}></span>
            <span className={styles.edge}></span>
            <span className={styles.front}>
                {text}
            </span>
        </button>
    )
}