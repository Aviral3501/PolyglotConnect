import React from 'react';
import Link from "next/link";
import Image from 'next/image'; // Ensure this import is present

function Logo() {
  return (
    <Link href="/">
        <Image src="/images/logos/logo.svg" alt="Logo" width={50} height={50} />
    </Link>
  );
}

export default Logo;