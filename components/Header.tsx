import React from "react";
import Logo from "./Logo";
import {DarkModeToggle} from "./ui/DarkModeToggle";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Link from "next/link";
import {  MessagesSquare } from "lucide-react";


const Header = async() => {
  // userauth 
  const session = await getServerSession(authOptions);
  console.log(session);


  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row  items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        {/* {logo} */}
        <Logo />

        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* Language Select */}

          {/* Session - when logged in */}
          {session ? (
            <>
                <Link href={"/chat"}  prefetch={false}>  
                {/* chat might be heavy // expensive -> dont prefetch it */}
                <MessagesSquare className="text-black dark:text-white"/>
                </Link>
            </>
          ) : (
            <Link href={"/pricing"}>Pricing</Link>
          )}

          {/* dark mode toggle  */}
          <DarkModeToggle />
          {/* user button */}
          <UserButton session={session}/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
