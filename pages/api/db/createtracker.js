import prisma from '../../../lib/prisma'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '../auth/[...nextauth]'


export default async function createtracker(req, res) {
    const session = await unstable_getServerSession(req, res, authOptions)

    if (!session) {
        res.status(401).json({ message: "You must be logged in." });
        return;
    }

    const { email, habit, color, trackerName, goal } = req.body
    // use unique email to find userID
    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: email,
    //     },
    // })
    // const id = user.id;

    // console.log('step 2')
    // console.log(user, id);

    const newTracker = await prisma.user.update({
        where: { email: email },
        data: {
            trackers: {
                create: {
                    // id is generated
                    // userId is given
                    habit: habit,
                    color: color,
                    name: trackerName,
                    goal: parseInt(goal),
                    current: 0
                }
            }
        },
    })

    res.status(201).json(newTracker)
}