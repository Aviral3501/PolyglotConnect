"use client"
import { signInWithCustomToken } from 'firebase/auth'
import { Session } from 'next-auth'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react'
import {auth} from '@/firebase'

// A higher order component to sync data with the base 
//  the use is being sotred in the firestore db , but not being displayed in the firebase ->user
//  so we need to sync the data with the base



// funciton to sync with the firebase auth
async function syncFirebaseAuth(session:Session){
    if(session && session.firebaseToken){
        try {
            await signInWithCustomToken(auth,session.firebaseToken); 
        } catch (error) {
            console.log("Error in the firebase auth provider");
            console.log("Error signing with the custom token");
            console.error(error);
        }
    }else{
        auth.signOut();
    }
    
}




const FirebaseAuthProvider = ({children}:{children:React.ReactNode}) => {

    const {data:session} = useSession();

    useEffect(()=>{
        if(!session)return;
        // now sync the firebase 
        syncFirebaseAuth(session);
    },[session])
  return (
    <div>
      {children}
    </div>
  )
}

export default FirebaseAuthProvider

