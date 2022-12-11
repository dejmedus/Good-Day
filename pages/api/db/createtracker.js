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

    const trackers = await prisma.tracker.findMany({
        where: {
            user: { email: session.user.email },
        }
    })

    res.status(201).json(trackers)

    // res.status(201).json(newTracker)
}