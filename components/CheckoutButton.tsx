"use client"

import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {db} from '@/firebase';

const CheckoutButton = () => {
  // there is no need to check but just in case
  // check if user is logged in
  const {data:session} = useSession();
  const [loading,setLoading]=useState(false);


  if(!session?.user.id) return; 


  const createCheckoutSession = async() => {
    // push the document into firestore db
    setLoading(true);

    const docRef = await addDoc(collection(db,'customers',session.user.id, 'checout-sessions'),{
      // fixed price 
      price:"price_21randomthing",
      sucess_url:window.location.origin,  // or oyu can directly take them to chat  `${window.origin.location}/chat`
      cancel_url:window.location.origin,
    })



    // stripe extension of the firebase will create a checkout session


    // redirect user to the checkout page
    
  }


  return (
    <div>
      {/* if subscribed show me the user is subscribed */}
      <button 
      onClick={()=>createCheckoutSession()}
      className=" min-w-full  text-black mt-2 bg-slate-300 rounded-3xl p-2 hover:bg-slate-400">
       Signup
      </button>
    </div>
  );
};

export default CheckoutButton;
