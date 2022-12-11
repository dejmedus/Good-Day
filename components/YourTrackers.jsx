import Tracker from "./Tracker"
import { useState, useEffect } from 'react'
import styles from '../styles/YourTrackers.module.css'
import Link from 'next/link'

const YourTrackers = ({ trackers, setTrackers }) => {

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/db/gettrackers')
            .then((res) => res.json())
            .then((data) => {
                setTrackers(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className={styles.container}>
            {isLoading
                ? <h1>loading...</h1>
                : <>
                    {trackers.map(tracker => {
                        return <div key={tracker.id} className={styles.trackerContainer}>
                            <Tracker tracker={tracker} />
                            <Link href={`tracker/${tracker.id}`}>🔗</Link>
                        </div>
                    })}
                </>}
        </div>
    )
}

export default YourTrackers