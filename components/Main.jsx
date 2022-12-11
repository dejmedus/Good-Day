import { signIn } from 'next-auth/react'
import styles from '../styles/Main.module.css'
import Button from "./Button"
import CreateTracker from "./CreateTracker"
import YourTrackers from "./YourTrackers"
import { useState } from 'react'

export default function Main({ session, status }) {

    const [trackers, setTrackers] = useState()
    const signin = () => signIn();
    return (
        <div className={styles.container}>
            {status === 'loading'
                ? <h3>loading...</h3>
                : status === 'authenticated'
                    ? <>
                        <h2>Heya {session.user.name} 👋</h2>
                        <div className={styles.splitContainer}>
                            <CreateTracker trackers={trackers} setTrackers={setTrackers} session={session} />
                            <YourTrackers trackers={trackers} setTrackers={setTrackers} session={session} status={status} />
                        </div>
                    </>
                    : <>
                        <h2>Create your own custom trackers</h2>
                        <Button name='Sign in' onClick={signin} />
                    </>
            }
        </div>
    )
}
