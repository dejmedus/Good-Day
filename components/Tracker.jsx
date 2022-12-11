import { useState } from 'react'
import styles from '../styles/Tracker.module.css'


const Tracker = ({ tracker }) => {

    // Habit tracker logic
    const [habitTracker, setHabitTracker] = useState(tracker.current)

    const addHabitTracker = (e) => {
        // name is the tracker id
        const { name } = e.target;
        console.log('TRACKER');
        console.log(name)

        setHabitTracker(cur => cur + 1)

    }
    const subtractHabitTracker = (e) => {
        // name is the tracker id
        const { name } = e.target;
        console.log('TRACKER');
        console.log(name)

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
    const [timeTracker, setTimeTracker] = useState(tracker.goal)
    const handleTimeTracker = () => {
        console.log('time tracker')
    }


    return (
        tracker.habit == 'Habit Tracker'
            ? <div id={tracker.id} name={tracker.id} className={`${styles.container} ${styles.color}`}>
                <h3>{tracker.name}</h3>
                <button onClick={subtractHabitTracker}>-</button>
                <div>{habitTracker}/{tracker.goal}</div>
                <button onClick={addHabitTracker}>+</button>
            </div>
            : <div id={tracker.id} name={tracker.id} className={`${styles.container} ${styles.color}`}>
                <h3>{tracker.name}</h3>
                <button onClick={handleTimeTracker}>time tracker {timeTracker}</button>
            </div>
    )
}

export default Tracker