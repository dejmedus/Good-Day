import styles from '../styles/CreateTracker.module.css'
import { useState } from 'react'
import Button from './Button'

export default function CreateTracker({ trackers, setTrackers, session }) {

    const [formData, setFormData] = useState({
        habit: 'Habit Tracker',
        color: 'red'
    });
    const [trackerType, setTrackerType] = useState('Habit Tracker');
    const [rangeValue, setRangeValue] = useState(0)

    const onChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        if (name == 'habit') {
            setTrackerType(value);
            setRangeValue(0)
        }
        if (name == 'goal') {
            setRangeValue(value)
        }
    };


    async function createTracker(e) {
        e.preventDefault()

        const data = {
            email: session.user.email,
            habit: formData.habit,
            color: formData.color,
            trackerName: formData.trackerName,
            goal: parseInt(formData.goal),
        }

        setFormData({
            habit: 'Habit Tracker',
            color: 'red'
        })
        setTrackerType('Habit Tracker')
        setRangeValue(0)

        const endpoint = '/api/db/createtracker'

        // Form the request for sending data to the server.
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        // Send the form data to api/db/createtracker.
        try {
            const response = await fetch(endpoint, options)
            const result = await response.json()
            setTrackers(result)
        }
        catch {
            console.log('ERROR: createTracker post')
        }
    }

    return (
        <form onSubmit={createTracker} className={styles.container}>
            <div className={styles.labelGroup}>
                <label htmlFor='trackerName'>
                    Goal
                </label>
                <input type='text' name='trackerName' id='trackerName' onChange={onChange} />
            </div>
            {/* <div className={styles.labelGroup}>
                <label className={styles.switch} htmlFor='habit'>Habit Tracker</label>
                <input type="radio" name='habit' id='habit' value='Habit Tracker' onChange={onChange} checked={trackerType == 'Habit Tracker'} />
            </div> */}
            {/* <div className={styles.labelGroup}>
                <label className={styles.switch} htmlFor='habit'>Time Tracker</label>
                <input type="radio" name='habit' id='habit' value='Time Tracker' onChange={onChange} />
            </div> */}
            {trackerType == 'Habit Tracker'
                ? <div className={styles.labelGroup}>
                    <label htmlFor='goal'>Days per week [{rangeValue}/7]</label>
                    <input value={rangeValue} type="range" min="0" max="7" className={styles.slider} id="goal" name='goal' onChange={onChange} />
                </div>
                : <div className={styles.labelGroup}>
                    <label htmlFor='goal'>Hours per day [{rangeValue}h]</label>
                    <input value={rangeValue} type="range" min="0" max="24" step='0.5' className={styles.slider} id="goal" name='goal' onChange={onChange} />
                </div>
            }
            <div className={styles.labelGroup}>
                <label htmlFor="color">Color</label>
                <select name="color" id="color" onChange={onChange}>
                    <option value="red">red</option>
                    <option value="orange">orange</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="pink">pink</option>
                    <option value="purple">purple</option>
                </select>
            </div>
            <Button type='submit' disabled={!formData.habit || !formData.color || !formData.trackerName || !formData.goal || formData.goal == 0} name='Create' />
        </form>
    )
}