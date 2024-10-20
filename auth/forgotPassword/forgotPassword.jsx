import React from "react";
import "./forgotpassword.css";
import logo from "./../../public/asset/img/ReMakeWaste1.svg";
import arrowleft from "./../../public/asset/img/arrowleft.svg";
import fpw from "./../../public/asset/img/fpw.svg";
import google from "./../../public/asset/img/google.svg";
import googles from "./../../public/asset/img/devicon_google.svg";
import apple from "./../../public/asset/img/apple.svg";
import Image from "next/image";
import Link from 'next/link'
import Btn from './../../components/button/btn'

const Login = () => {
  return (
    <div className="w-full flex justify-between relative">
      <div className= " w-full md:w-1/2 px-5 lg:px-10 xl:px-16">
        <Image src={logo} alt="logo" className="flex my-10 mr-52  justify-center md:justify-between w-20 h-20 md:w-28 md:h-28"/>
       <Image src={fpw} alt="forgotpassword" className="hidden md:flex mt-16 self-center w-10 h-10"/>
        <h1 className="font-extrabold text-2xl hidden md:flex mb-3 mt-3">Forgot password?</h1>
          <p className=" text-xl hidden md:flex mb-5">No worries, we&apos;ll sent you reset instructions</p>
        <div className="flex md:hidden w-10/12 justify-between my-5 ">
       
        <Link href={"/"}><Image src={arrowleft} alt="arrowleft" className="self-center w-5 h-5"/></Link>
        <p className="font-semibold text-2xl ">Forgot Password</p>
        
        </div>
        <p className="text-center my-8 md:hidden">Enter the Email address you used to create the account, and we will email you code to reset your password.</p>
         
        <form action="">
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="font-medium text-lg lg:hidden">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Enter your Email..." className="rounded-2xl border-2 px-5 border-black py-2 lg:border-none lg:px-1 lg:border-bottom-2 lg:border-bottom-black " />
          </div>
         
          <div className="mt-5">
            <Btn label="Send Email" className=" text-white w-full py-2 "/>

            </div>
            <div className="hidden md:flex w-full justify-center my-5 ">
       
        <Link href={"/sign-in"}><Image src={arrowleft} alt="arrowleft" className="self-center w-5 h-5 mr-2"/></Link>
        <p>Back to Log In</p>
        </div>
           
         
          
        </form>
      </div>
      <div className="forgotpwbg fixed hidden md:flex w-1/2 object-fit ml-[50%]">
      </div>
    </div>
  );
};

export default Login;
