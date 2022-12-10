import { useState } from 'react'
import styles from '../styles/Tracker.module.css'


const Tracker = () => {

    const [tracker, setTracker] = useState(0)
    const addTracker = () => setTracker(cur => cur + 1)
    const subtractTracker = () => {
        if (tracker > 0) {
            setTracker(cur => cur - 1)
        }
    }

    return (
        <div className={styles.container}>
            <button onClick={subtractTracker}>-</button>
            <div>{tracker}</div>
            <button onClick={addTracker}>+</button>
        </div>
    )
}

export default Tracker