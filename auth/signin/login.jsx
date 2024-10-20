import React from "react";
import "./login.css";
import logo from "./../../public/asset/img/ReMakeWaste1.svg";
import arrowleft from "./../../public/asset/img/arrowleft.svg";
import pwvisible from "./../../public/asset/img/pwvisible.svg";
import google from "./../../public/asset/img/google.svg";
import googles from "./../../public/asset/img/devicon_google.svg";
import apple from "./../../public/asset/img/apple.svg";
import Image from "next/image";
import Link from 'next/link'
import Btn from './../../components/button/btn'

const Login = () => {
  return (
    <div className="w-full flex justify-between relative">
      <div className= " w-full md:w-1/2 px-5 lg:px-10 xl:px-16 ">
        <Image src={logo} alt="logo" className="flex my-5 mr-52 justify-center md:justify-between w-20 h-20 md:w-28 md:h-28"/>
        <h1 className="font-extrabold text-2xl hidden md:flex mb-5">Welcome Back</h1>
        <div className="flex md:hidden w-3/5 justify-between my-5 ">
        <Link href={"/"}><Image src={arrowleft} alt="arrowleft" className="self-center w-5 h-5"/></Link>
          <p className="font-semibold text-2xl ">Sign In</p>
        </div>
        <form action="">
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="font-medium text-lg">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Enter your Email..." className="rounded-2xl border-2 px-5 border-black py-2 " />
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="password" className="font-medium text-lg">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your Password..." className="rounded-2xl px-5 border-2 border-black py-2 "/>
            <Image src={pwvisible} alt="password" className="absolute top-10 xl:top-10 left-[86%] lg:left-[88%] xl:left-[91%]"/>
             <div className='w-full flex justify-between lg:flex-row-reverse mt-2' >
              <Link href={"/forgotpassword"} className="text-red-500 ">Forgot Password?</Link>
              <span className='hidden lg:flex'><input type="checkbox"/><span className='ml-2'>Keep me signed in for 30 days</span></span>
             </div>
          </div>
          <div className="mt-5">
            <Btn label="Log In" className=" text-white w-full py-2 "/>

            <div className="hidden lg:flex justify-between my-2">
              <hr className='lg:w-40 xl:w-44 border  border-grey-600 self-center'/> 
              <span className='self-center'>or</span>
              <hr className='lg:w-40 xl:w-44 border  border-grey-600  self-center'/> 
              </div>
            <div className="flex lg:hidden justify-between my-2">
              <hr className=' w-16 border  border-grey-600 self-center'/> 
              <span className='self-center'>or continue with</span>
              <hr className=' w-16 border  border-grey-600  self-center'/> 
              </div>
              <div className="w-full flex justify-center lg:hidden">
              <Image src={googles} alt="google" className=" mr-4"/>
              <Image src={apple} alt="apple" className=""/>
              </div>
              <Btn label="Sign In with google" img={google} alt='google' className="border-brand-100 border text-brand-100 w-full justify-center py-2 hidden lg:flex" spanclass='flex justify-center self-center'  imgclass='self-center w-6 h-6 mr-2'/>
          </div>
           
         
          <div className="my-2 text-center"><span>Don&apos;t have an account? <Link href={"/sign-up"} className="text-green-500">Sign Up</Link></span></div>
        </form>
      </div>
      <div className="loginbg fixed hidden md:flex w-1/2 ml-[50%]">
      </div>
    </div>
  );
};

export default Login;
