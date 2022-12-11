import prisma from '../../../lib/prisma'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '../auth/[...nextauth]'


export default async function updatetracker(req, res) {
    const session = await unstable_getServerSession(req, res, authOptions)

    if (!session) {
        res.status(401).json({ message: "You must be logged in." });
        return;
    }
    const { id, current } = req.body

    // can we go straight to the tracker???
    const updatedTracker = await prisma.tracker.update({
        where: { id: id },
        data: {
            current: parseInt(current)
        }
    })

    res.status(201).json(updatedTracker)
}