"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Nav = () => {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "FAQ",
      href: "/about/faq",
    },
    {
      label: "Posts",
      href: "/posts",
    },
    {
      label: "Crud",
      href: "/crud",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div
        className="cursor-pointer relative flex items-center "
        onClick={toggleMenu}
      >
      
      <div className="flex items-center fixed top-2 left-0 mx-4"> 
        <div>
        <Bars3Icon className="h-10 w-10 p-2 bg-slate-100 rounded-full text-black  hover:bg-slate-300" />
        </div>
        <div className="ml-4"> ETFGO</div>
        </div>


        <div className="flex p-2 fixed top-2 right-0 mx-20 justify-end">
          <Image width={24} height={24} src="/menu.svg" alt="Menu icon" />
        </div>
       
      </div>

      <ul className="flex gap-5 py-10">
        {navItems.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={
                pathname === `${link.href}` ? "text-blue-500 font-bold" : ""
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
