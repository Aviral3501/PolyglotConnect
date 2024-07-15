import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { adminDB } from "./firebase-admin";
import { FirestoreAdapter } from "@auth/firebase-adapter";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        session:async({session,token}) =>{
            if(session?.user){
                if(token.sub){
                    session.user.id = token.sub;
                }
            }
            return session;
        },
        jwt: async ({ user, token }) => {
            if (user) {
                token.sub = user.id;
            }
            return token;
        }
    },
    adapter: FirestoreAdapter(adminDB) as any, // Example of using 'as any' for temporary type assertion
} satisfies NextAuthOptions;


// firesotre provides user data in this format :
// {
//     user: {
//       name: 'aviral singh',
//       email: 'aviralsingh3501@gmail.com',
//       image: 'https://lh3.googleusercontent.com/a/ACg8ocL2ikdUYVSq7z0erGQddUG05wqBeQlFqj8agodNpzAnguv3Ah8=s96-c'
//     }
//   }
// However to add a unique id to this data : above changes need to be made 

// Sonny --> 2:18:40

// After this we get :

// {
//     user: {
//       name: 'aviral singh',
//       email: 'aviralsingh3501@gmail.com',
//       image: 'https://lh3.googleusercontent.com/a/ACg8ocL2ikdUYVSq7z0erGQddUG05wqBeQlFqj8agodNpzAnguv3Ah8=s96-c',
//       id: 'MRX1BRdMPIWKDmAhjbm2'
//     }
//   }