// to extend the definition of the session or user data to include id field

import { DefaultSession } from "next-auth";
import NextAuth from "next-auth";

declare module 'next-auth'{
    interface Session{
        firebaseToken?:string;
        user :{
            id:string;
        }& DefaultSession['user']

    }
}