import React from 'react';
import Link from "next/link";
import Image from 'next/image'; // Ensure this import is present
import { AspectRatio } from './ui/aspect-ratio';

function Logo() {
  return (
    <Link href="/" prefetch={false} className=' overflow-hidden'>
        
        <div className="flex items-center w-72 h-14">
            <AspectRatio
            ratio={16/9}
            className='flex items-center justify-center'
            >
                <Image
                priority
                src="/images/logos/logo.svg"
                alt="Polyglot Logo"
                width={50}
                height={50}
                className='dark:filter dark:invert'
                // invert the color of the logo on swtiching modes : theme
                 />

            </AspectRatio>

        </div>
    </Link>
  );
}

export default Logo;