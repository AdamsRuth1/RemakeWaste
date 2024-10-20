"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { disableNavWithFooter } from "@/components/utils/disableNavWithFooter";
import Link from "next/link";
import Image from "next/image";
import menu from "./../../public/asset/img/menu.svg";
import close from "./../../public/asset/img/close.svg";
import logo from "./../../public/asset/img/ReMakeWaste1.svg";
import Btn from "../button/btn";

const navmenu = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "#",
    name: "Recycle Now",
  },
  {
    link: "#about",
    name: "About Us",
  },
  {
    link: "#contact",
    name: "Contact Us",
  },
];

const Navbar = () => {
  const path = usePathname();
  const [isActive, setIsActive] = useState(0);
  const [isActives, setIsActives] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (index, id) => {
    const isActive = index;
    const isActives = id;
    setIsActive(isActive);

    setIsActives(isActives);
    console.log(isActives, isActive);
  };

  return (
    <>
      {!disableNavWithFooter.includes(path) && (
        <div
          className={`fixed mb-20 py-4 shadow-2xl border-gray-100 bg-white z-20 border-b  flex w-full px-5  lg:px-28 justify-between items-center `}
        >
          <div className="">
            
            <Image src={logo} alt="logo" className="w-16 h-16 md:w-20 md:h-20" />
          </div>

          <div
            className={`flex  bg-white  fixed top-0 left-0 rounded-tr-lg rounded-br-lg flex-col md:flex-row md:static px-10 md:px-0 z-20 w-full md:w-full md:justify-between  md:items-center   ${
              isOpen ? "flex " : "hidden md:flex"
            }`}
          >
            <div
              onClick={handleMenuClick}
              role="button"
              tabIndex={0}
              onKeyDown={handleMenuClick}
              className={`md:hidden self-end mt-8`}
            >
              <Image src={close} alt="close" />
            </div>
            <div>
              
            </div>
            <div className="w-full  mx-auto flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:flex-row  md:w-full justify-evenly text-lg font-bold">
              {navmenu.map((nav, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row  justify-between text-xl font-bold"
                >
                  <Link
                    href={nav.link}
                    className={`mb-8 text-brand-100  md:mb-0 md:mt-0 cursor-pointer hover:text-purple-950 ${
                      isActive === index || isActives === nav.link
                        ? "visited:text-green-600 focus:text-green-600 active:text-green-600 "
                        : "active:none"
                    }`}
                    tabIndex={index}
                    onClick={() => handleLinkClick(index, nav.link)}
                    onLoad={() => setIsActive(index)}
                  >
                    {nav.name}
                  </Link>
                </div>
              ))}
            </div>
            <Link href={"/sign-up"} className="self-center flex">
              <Btn
                label={"Sign Up"}
                className="bg-brand-100 rounded-lg w-32 self-center py-3 text-white font-sans font-semibold"
              />
            </Link>
            </div>
            <hr className="md:hidden flex mt-5 text-gray-300" />
          </div>
          <div className="md:hidden">
          <div
              onClick={handleMenuClick}
              role="button"
              tabIndex={0}
              onKeyDown={handleMenuClick}
              className="self-center"
            >
              <Image src={menu} alt="menu" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
