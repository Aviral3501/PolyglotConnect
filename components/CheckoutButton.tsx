"use client"

import { useSession } from "next-auth/react";

const CheckoutButton = () => {
  // there is no need to check but just in case
  // check if user is logged in
  const {data:session} = useSession();
  if(!session) return; 

  const createCheckoutSession = () => {
    // push the document into firestore db



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
