"use client";
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="flex sticky z-50 mix-blend-normal shadow-xl text-white bg-gradient-to-r from-blue-500 to-violet-500 items-center justify-between px-12 drop-shadow-xl">
      <Link href="/">
        <h1 className="text-white font-serif text-[24px]">Tech-EsterZ</h1>
      </Link>

      {/* Hamburger Menu Icon */}
      <div
        className="md:hidden cursor-pointer"
        onClick={toggleMenu}
        onMouseClick={() => setShowMenu(true)}
        
      >
        <div className="w-8 h-1 bg-white my-1 rounded-full transition-all duration-500"></div>
        <div className="w-8 h-1 bg-white my-1 rounded-full transition-all duration-500"></div>
        <div className="w-8 h-1 bg-white my-1 rounded-full transition-all duration-500"></div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mobile-menu absolute top-10 right-3
         bg-gradient-to-br from-blue-500 to-violet-500 
         rounded-lg p-4  z-50 ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        
        <ul className="mb-3">
          <li className="text-[18px]">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[18px] pt-2">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>

      {/* Regular Nav Menu (Visible on larger screens) */}
      <nav className="hidden md:flex space-x-4">
        <ul className="flex flex-row content-around align-middle justify-around m-2">
          <li className="mx-5 text-[16px]">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-5 text-[16px]">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
