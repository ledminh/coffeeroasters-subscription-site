import NextAuth, { NextAuthOptions, Session } from "next-auth"

import GoogleProvider  from "next-auth/providers/google";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../utils/mongodb/mongodb";


if (!process.env.GOOGLE_CLIENT_ID) {
    throw new Error('Invalid/Missing environment variable: "GOOGLE_CLIENT_ID"')
}

if (!process.env.GOOGLE_CLIENT_SECRET) {
    throw new Error('Invalid/Missing environment variable: "GOOGLE_CLIENT_SECRET"')
}


export type SessionType = Session & {
    user: {
        id: string
    }
}

export const authOptions:NextAuthOptions = {  
    // Configure one or more authentication providers  
    providers: [    
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    adapter: MongoDBAdapter(clientPromise),
    
    
    
    // secret: process.env.SECRET,


    callbacks: {
        async session({ session, token, user }):Promise<SessionType> {
            

            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id
                }
            } 
        }

        
    }


}

export default NextAuth(authOptions)