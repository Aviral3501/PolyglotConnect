import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {cn} from "../lib/utils"; //adddcustom effect 
import Image from "next/image";


function UserAvatar({ name,image,className}:{ name?:string | null ,image?:string| null,className?:string }){
    //  className is optional
    // name is mandatory
  return (
    <div>
        {/* combine the className passed with default className */}
      <Avatar className={cn(' bg-white text-black',className)}> 
        {image && (
           <Image
                src={image|| "/images/logos/user-avatar.svg"}
                alt={image||"/images/logos/user-avatar.svg"}
                height={40}
                width={40}
                className="rounded-full"/>
        )}
         
        <AvatarImage src="/images/logos/user-avatar.svg" />
        <AvatarFallback className="text-black bg-black dark:text-white dark:bg-black">
            {name?.split(" ").map((n)=>n[0]).join("")} 
            {/*if name is not passed then show first letter of each word */}

        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
