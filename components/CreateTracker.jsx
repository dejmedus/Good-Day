import styles from '../styles/CreateTracker.module.css'
import { useState } from 'react'
import Button from './Button'

export default function CreateTracker({ session }) {

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

        // change toggle label
        // setTrackerType(habit == false ? 'Habit Tracker' : 'Time Tracker');
        if (name == 'habit') {
            // setTrackerType(cur => cur == 'Habit Tracker' ? 'Time Tracker' : 'Habit Tracker');
            setTrackerType(value);
            setRangeValue(0)
        }
        if (name == 'goal') {
            setRangeValue(value)
        }
    };


    function createTracker() {
        const email = session.user.email;
        const habit = formData.habit;
        const color = formData.color;
        const trackerName = formData.trackerName;
        const goal = formData.goal;

        console.log(email, habit, color, trackerName, goal);
        // setFormData({})
        // setTrackerType('Habit Tracker')
        // setRangeValue(0)
        // add tracker to database
        // dbTracker(email, habit, color, trackerName, goal)
        //     .then(async () => {
        //         await prisma.$disconnect()
        //     })
        //     .catch(async (e) => {
        //         console.error(e)
        //         await prisma.$disconnect()
        //         process.exit(1)
        //     })
    }

    return (
        <form className={styles.container}>
            <div className={styles.labelGroup}>
                <label htmlFor='trackerName'>
                    Goal
                </label>
                <input type='text' name='trackerName' id='trackerName' onChange={onChange} />
            </div>
            <div className={styles.labelGroup}>
                <label className={styles.switch} htmlFor='habit'>Habit Tracker</label>
                <input type="radio" name='habit' id='habit' value='Habit Tracker' onChange={onChange} checked={trackerType == 'Habit Tracker'} />
            </div>
            <div className={styles.labelGroup}>
                <label className={styles.switch} htmlFor='habit'>Time Tracker</label>
                <input type="radio" name='habit' id='habit' value='Time Tracker' onChange={onChange} />
            </div>
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
            <Button onClick={createTracker} disabled={!formData.habit || !formData.color || !formData.trackerName || !formData.goal || formData.goal == 0} name='Create' />
        </form>
    )
}

async function dbTracker(email, habit, color, trackerName, goal) {

    // use unique email to find userID
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    })
    const userId = user.userId;

    console.log(user, user.userId);

    const newTracker = await prisma.user.update({
        where: { userId: userId },
        data: {
            trackers: {
                create: {
                    // id is generated
                    userId: userId,
                    habit: habit,
                    color: color,
                    name: trackerName,
                    goal: goal,
                    current: 0
                }
            }
        },
    })
    console.log(newTracker)
}
