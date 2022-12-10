import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../lib/prisma"


export default NextAuth({
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
        // buttonText: "" // Hex color code
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log(user, account, profile, email, credentials);
            return true
        },
        // async redirect({ url, baseUrl }) {
        //     return baseUrl
        // },
        // async session({ session, user, token }) {
        //     return session
        // },
        // async jwt({ token, user, account, profile, isNewUser }) {
        //     return token
        // }
    }
});