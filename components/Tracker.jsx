import { useState } from 'react'
import styles from '../styles/Tracker.module.css'


const Tracker = ({ tracker }) => {

    // Habit tracker logic
    const [habitTracker, setHabitTracker] = useState(tracker.current)

    const addHabitTracker = () => {

        if (habitTracker < tracker.goal) {
            setHabitTracker(cur => cur + 1)
        }

        fetch('/api/db/gettrackers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: tracker.id, current: habitTracker }),
        })
    }
    const subtractHabitTracker = () => {

        if (habitTracker > 0) {
            setHabitTracker(cur => cur - 1)
        }

        fetch('/api/db/updatetracker', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: tracker.id, current: habitTracker }),
        })
    }

    // Time tracker logic
    // const [timeTracker, setTimeTracker] = useState(tracker.goal)
    // const handleTimeTracker = () => {
    //     console.log('time tracker')
    // }


    return (
        <div id={tracker.id} name={tracker.id} className={`${styles.container} ${styles.color}`}>
            <h3>{tracker.name}</h3>
            <button onClick={subtractHabitTracker}>-</button>
            <div>{habitTracker}/{tracker.goal}</div>
            <button onClick={addHabitTracker}>+</button>
        </div>

        //Time Tracker
        // tracker.habit == 'Habit Tracker'
        //     ? <div id={tracker.id} name={tracker.id} className={`${styles.container} ${styles.color}`}>
        //         <h3>{tracker.name}</h3>
        //         <button onClick={subtractHabitTracker}>-</button>
        //         <div>{habitTracker}/{tracker.goal}</div>
        //         <button onClick={addHabitTracker}>+</button>
        //     </div>
        //     : <div id={tracker.id} name={tracker.id} className={`${styles.container} ${styles.color}`}>
        //         <h3>{tracker.name}</h3>
        //         <button onClick={handleTimeTracker}>time tracker {timeTracker}</button>
        //     </div>
    )
}

export default Tracker