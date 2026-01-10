import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <>
      <nav>
        <header>
          <Link href={"/"}>
            <Image
              src={`/icons/logo.png`}
              alt={`logo.png`}
              height={24}
              width={25}
            />
            <p className="">devFest</p>
          </Link>

          <ul className="">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/">Email</Link>
          </ul>
        </header>
      </nav>
    </>
  );
};

export default page;
