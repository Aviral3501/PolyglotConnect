import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { adminAuth, adminDB } from "./firebase-admin";
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
                    const firebaseToken = await adminAuth.createCustomToken(token.sub);
                    session.firebaseToken = firebaseToken;
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

// firebase token is used to verify the user on the firebase

// After adding the firebase token , now our session data looks like :

// {
//     user: {
//       name: 'aviral singh',
//       email: 'aviralsingh3501@gmail.com',
//       image: 'https://lh3.googleusercontent.com/a/ACg8ocL2ikdUYVSq7z0erGQddUG05wqBeQlFqj8agodNpzAnguv3Ah8=s96-c',
//       id: 'MRX1BRdMPIWKDmAhjbm2'
//     },
//     firebaseToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTcyMTAyMzE2OCwiZXhwIjoxNzIxMDI2NzY4LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1nYXltbEBzYXNzLXRyYW5zbGF0b3ItYXBwLTJhOTY3LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstZ2F5bWxAc2Fzcy10cmFuc2xhdG9yLWFwcC0yYTk2Ny5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVpZCI6Ik1SWDFCUmRNUElXS0RtQWhqYm0yIn0.nEZgkh8vyhUK5uUevb0KA9GuDAq7B2NH1p7P6ZkdE_x67SsSHH23n-iOYg_gugczXbUMr_sYQ0M9dZbFK4sPJ5GbjNCOYDJrfpSVeTGoedIRay-gaV8A-jwX7pN9UieS00UyaqQ5CkT4ahqatOtU4jniMeKH94eu0slMX2qQP6tbBXmXu7u7WcNxeaOv-oKKm1DyrrZ6BfjCG6nclbmqNBoOF9ds-XlJyej6AbyN5tFNDnuwuZ2BLxGHpTmzj8Bm0O3_x-w6zhKp9RGvUPOETxznu0iO55uMnS_22oMAH3e3VgJZ2cuBn6bSKIiJGpESu_MNBNbwUdfmtVqMJUy8wg'
//   }