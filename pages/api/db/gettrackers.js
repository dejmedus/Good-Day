import prisma from '../../../lib/prisma'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '../auth/[...nextauth]'


export default async function gettrackers(req, res) {
    const session = await unstable_getServerSession(req, res, authOptions)

    if (!session) {
        res.status(401).json({ message: "You must be logged in." });
        return;
    }

    const trackers = await prisma.tracker.findMany({
        where: {
            user: { email: session.user.email },
        }
    })

    res.status(201).json(trackers)
}