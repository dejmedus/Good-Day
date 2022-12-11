import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Tracker from '../../components/Tracker'
import styles from '../../styles/OneTracker.module.css'

const OneTracker = () => {
    const router = useRouter()
    const { pid } = router.query

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/db/getonetracker', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: pid }),
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className={styles.container}>
            {isLoading ?
                <h3>loading...</h3>
                : <Tracker tracker={data} />}
        </div>
    )
}

export default OneTracker