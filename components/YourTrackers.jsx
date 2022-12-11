import Tracker from "./Tracker"
import { useState, useEffect } from 'react'
import styles from '../styles/YourTrackers.module.css'

const YourTrackers = ({ trackers, setTrackers }) => {

    // const [data, setData] = useState(null)
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
                        return <Tracker key={tracker.id} tracker={tracker} />
                    })}
                </>}
        </div>
    )
}

export default YourTrackers