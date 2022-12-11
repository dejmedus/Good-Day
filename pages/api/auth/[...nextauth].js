import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google";
import prisma from '../../../lib/prisma'


export const authOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    theme: {
        colorScheme: "auto", // "auto" | "dark" | "light"
        brandColor: "0x8bc27f", // Hex color code
        buttonText: "0x8bc27f" // Hex color code
    },
}

export default NextAuth(authOptions)