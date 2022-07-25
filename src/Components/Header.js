import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";
const Header = () => {
  return (
    <header>
      {/* <nav>
        <div className=""></div>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>Home</li>
          </Link>
        </ul>
      </nav> */}
      <nav className="absolute fluid flex justify-between items-center mt-12 z-50">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="m-0 p-0" />
        </Link>
        <Link href="/">
          <div>
            <div className="w-8 h-[5px] bg-primary-blue mb-[4px]"></div>
            <div className="w-8 h-[5px] bg-primary-blue mb-[4px]"></div>
            <div className="w-8 h-[5px] bg-primary-blue"></div>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
