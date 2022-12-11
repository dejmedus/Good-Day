import prisma from '../../../lib/prisma'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '../auth/[...nextauth]'


export default async function getonetrackers(req, res) {
    const session = await unstable_getServerSession(req, res, authOptions)

    if (!session) {
        res.status(401).json({ message: "You must be logged in." });
        return;
    }
    const { id } = req.body

    const tracker = await prisma.tracker.findUnique({
        where: {
            id: id
        }
    })

    res.status(201).json(tracker)
}