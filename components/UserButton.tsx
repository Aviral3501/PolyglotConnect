"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import UserAvatar from './UserAvatar'
import { Session } from 'next-auth'
import { Button } from './ui/button'
import { signIn, signOut } from 'next-auth/react'
  

const UserButton = ({session}:{session:Session | null}) => {
  // Session....

  // formatting the username
  const formattedName = session?.user?.name ? capitalizeName(session.user.name) : "";

  if(!session){
    return(
      <>
      <Button variant={'outline'} onClick={()=>signIn()} >Signin</Button>
      </>
    )
  }
  return (
    <div>
    <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar name={session.user?.name?.toUpperCase()}
                        image={session.user?.image} />
           
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuLabel>{formattedName}</DropdownMenuLabel>

        <DropdownMenuSeparator />
       
        <DropdownMenuItem onClick={()=>signOut()}>Signout</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  </div>
  
  )
}

export default UserButton;



// utility function to fromat the username
function capitalizeName(name: string): string {
  return name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
