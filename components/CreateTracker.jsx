import styles from '../styles/CreateTracker.module.css'
import { useState } from 'react'
import Button from "./Button"

export default function CreateTracker({ session, status }) {


    const [formData, setFormData] = useState({});
    const [trackerType, setTrackerType] = useState('Habit Tracker');

    const onChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        // change toggle label
        setTrackerType(habitBool == false ? 'Habit Tracker' : 'Time Tracker');
    };

    function createTracker() {
        const email = session.user.email;
        const habitBool = formData.habitBool;
        const color = formData.color;
        const trackerName = formData.trackerName;
        const goal = formData.goal;

        console.log(email, habitBool, color, trackerName, goal);

        // add tracker to database
        // dbTracker(email, habitBool, color, trackerName, goal)
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
        <form onSubmit={createTracker} className={styles.container}>
            <div className={styles.labelGroup}>
                <label htmlFor='trackerName'>
                    Goal
                </label>
                <input type='text' name='trackerName' id='trackerName' onChange={onChange} placeholder='yoga' />
            </div>
            <div className={styles.labelGroup}>
                <label class="switch" htmlFor='habitBool'>{trackerType}</label>
                {trackerType}
                <input type="checkbox" name='habitBool' id='habitBool' onChange={onChange} />
                <span class="slider"></span>
            </div>
            {trackerType == 'Habit Tracker'
                ? <div className={styles.labelGroup}>
                    <label htmlFor='goal'>Days per week</label>
                    <input type="range" min="1" max="7" value="1" class="slider" id="goal" name='goal' onChange={onChange} />
                </div>
                : <div className={styles.labelGroup}>
                    <label htmlFor='goal'>Hours per day</label>
                    <input type="range" min="1" max="18" step='0.5' value="1" class="slider" id="goal" name='goal' onChange={onChange} />
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
            <Button type="submit" disabled={!formData.habitBool || !formData.color || !formData.trackerName || !formData.goal} name='Create' />
        </form>
    )
}

async function dbTracker(email, habitBool, color, trackerName, goal) {

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
                    habit: habitBool,
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
