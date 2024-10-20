"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { disableNavWithFooter } from "@/components/utils/disableNavWithFooter";
import Btn from "../button/btn";
import Image from "next/image";
import email from "./../../public/asset/img/ic_outline-email.svg";
import email2 from "./../../public/asset/img/ic_baseline-email.svg";
import whatsapp from "./../../public/asset/img/mingcute_whatsapp-fill.svg";
import person from "./../../public/asset/img/person.svg";
import logo from "./../../public/asset/img/ReMakeWaste.svg";
import facebook from "./../../public/asset/img/ic_baseline-facebook.svg";
import instagram from "./../../public/asset/img/teenyicons_instagram-solid.svg";
import telegram from "./../../public/asset/img/bi_telegram.svg";
import twitter from "./../../public/asset/img/formkit_twitter.svg";
import copyright from "./../../public/asset/img/material-symbols_copyright.svg";

const Footer = () => {
  const path = usePathname();
  return (
    <>
      {!disableNavWithFooter.includes(path) && (
        <div className="bg-brand-300 text-brand-100 font-extrabold">
          <div className="pt-8">
            <div className="flex flex-col items-center w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
            <div className="flex md:hidden">
                    <Image src={logo} alt="logo" className="" />
                  </div>
              <h3 className="font-capriola text-2xl">NEW TO ReMakeWaste ?</h3>
              <p className="font-sans font-normal text-center">
                Subscribe to our newsletter to get updates of our latest deals !
              </p>
              <div className="relative mt-9">
                <input
                  type="text"
                  className="w-full group px-24 mb-6 bg-brand-300 border focus:border-brand-100 focus-within:border-brand-100 border-brand-100 py-3 rounded-3xl"
                  placeholder="Enter your Email Address"
                />
                <Image src={email} alt="email" className="absolute z-20 -mt-16 ml-16 group-focus:hidden" />
                <Btn label={"Subscribe"} className="mb-6 px-24 w-full bg-brand-100 py-3 rounded-3xl" />
              </div>
              </div>
              <div className="flex flex-col md:flex-row mb-10 justify-center md:justify-between w-11/12 lg:w-3/5 mx-auto">
                <div className="flex w-3/4 md:w-full justify-start mx-auto mb-4">
                  <Image src={email2} alt="email"className="w-10 h-10 self-center"/>
                  <div className="ml-3">
                    <h5>Email Support</h5>
                    <p className="font-normal">help@ReMakeWaste.com</p>
                  </div>
                </div>
                <div className="flex w-3/4 justify-start mx-auto mb-4">
                  <Image src={person} alt="phone" className="w-10 h-10 self-center"/>
                  <div  className="ml-3">
                    <h5>Phone Support</h5>
                    <p className="font-normal">+234 999-9099-999</p>
                  </div>
                </div>
                <div className="flex w-3/4 md:w-full justify-start mx-auto mb-4">
                  <Image src={whatsapp} alt="whatsapp" className="w-10 h-10 self-center"/>
                  <div  className="ml-3">
                    <h5>What’sApp Support</h5>
                    <p className="font-normal">+234 787-8989-954</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col md:flex-row justify-between w-10/12 md:w-3/4 lg:w-[40%] mx-auto">
                  <div className="mb-4">
                    <h3 className="font-capriola font-semibold">ABOUT US</h3>
                    <ul className="font-normal">
                      <li>Contact us</li>
                      <li>About us</li>
                      <li>Career</li>
                      <li>Our blog</li>
                      <li>Forum</li>
                      <li>Terms & Condition</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3>RECYCLE WITH REMAKEWASTE</h3>
                    <ul className="font-normal">
                      <li>See close pick-up stations</li>
                      <li>Delivery options</li>
                      <li>ReMakeWaste return policy</li>
                      <li>FAQs</li>
                      <li>Sell on ReMakeWaste</li>
                      <li>Referral Program</li>
                      <li>Evaluate your item</li>
                      <li>Make Payment</li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center md:justify-between my-5">
                  <div className="hidden md:flex">
                    <Image src={logo} alt="logo" />
                  </div>
                  <div className="flex flex-col self-center">
                    <h1 className="text-center lg:text-end mb-4 text-xl lg:text-2xl ">
                      Connect With Us
                    </h1>
                    <div className="grid grid-cols-4 gap-3">
                      <Image src={facebook} alt="facebook" className="w-10 h-10 self-center"/>
                      <Image src={telegram} alt="telegram" className="w-10 h-10 self-center" />
                      <Image src={twitter} alt="twitter" className="w-10 h-10 self-center" />
                      <Image src={instagram} alt="instagram" className="w-10 h-10 self-center" />
                    </div>
                  </div>
                  <div className="hidden md:flex">
                    <Image src={logo} alt="logo" className="" />
                  </div>
                </div>
              
            </div>
          </div>
          <div className="text-brand-100 w-full flex justify-evenly pb-4">
            <hr className=" border border-brand-100 w-full hidden lg:flex" />
            <span className="text-sm flex self-center flex-col lg:flex-row justify-center items-center w-full">
              <span className="flex ">
                Copyright
                <Image
                  src={copyright}
                  alt="copyright"
                  className="w-4 h-4 self-center"
                />{" "}
                2024 ReMakeWaste.com{" "}
              </span>
              <span>All right reserved</span>
            </span>
            <hr className=" border border-brand-100 w-full  hidden lg:flex" />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
