import Tracker from "./Tracker"
import { useState, useEffect } from 'react'

const YourTrackers = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/db/gettrackers')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    return (
        isLoading
            ? <h1>loading...</h1>
            : <>
                <p>{data.map(tracker => {
                    return <Tracker key={tracker.id} tracker={tracker} />
                })}</p>
            </>
    )
}

export default YourTrackers