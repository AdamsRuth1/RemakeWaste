"use client";
import React, { useState } from "react";
import Password from "./password";
import Image from "next/image";
import Rectangle from "./../../public/Rectangle 11.png";
import Logo from "./../../public/ReMakeWaste.png";
import Input from "./input";
import PhoneNumberInput from "./phoneNumber";
import Button from './button'; 
import Link from "next/link";
import Google from "../../public/flat-color-icons_google.png";

const Signup = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  const [countryCode, setCountryCode] = useState("+234");
  return (
    <div className="overflow-hidden">
      <div className="flex flex-wrap">
        <div className="hidden md:flex">
          <Image className="w-[561px] h-auto" src={Rectangle} alt="Rectangle" />
        </div>
        <div className="flex-1 md:ml-[74px] flex flex-col"> 
          <div className="hidden md:flex md:items-start"> 
            <Image className="w-[296px] h-[250px] -ml-20" src={Logo} alt="logo" />
          </div>
          <h1 className="text-5xl mt-4">Sign Up</h1>
          <p className="text-[#212121] mt-[17px] mb-[34px] text-2xl">
            Create an account to start recycling your used items!
          </p>
          <form>
            <div className="">
              <Input type="text" placeholder="First Name"  className="w-full"  required />
              <Input type="text" placeholder="Last Name" className="w-full mt-[29px]" required/>
            </div>
            <div className=" mt-[29px] mb-[29px]">
              <Input type="email" placeholder="Email Address" className="w-full" required />
              {/* <Input 
                type="select" 
                options={[
                  { value: '', label: 'Select Gender' }, 
                  { value: 'male', label: 'Male' }, 
                  { value: 'female', label: 'Female' }
                ]}
                className="w-full ml-[19px]" 
                required
              /> */}
            </div>
            <div className="mb-[29px]">
            <PhoneNumberInput countryCode={countryCode} setCountryCode={setCountryCode} 
            
           />
            {/* <Input 
            type="Date"
            id="DOB"
            required
           className="w-full"
            /> */}
</div>
<Password  className="mt-[29px]"/>
<div className='mb-[41px]'><p>I’ve read and agree with the Terms of Service and our Privacy Policy</p></div>

<Button onClick={handleClick}  className="w-full bg-[#1A362B] text-white hover:bg-[#1A363A] rounded-xl">
        Sign Up
      </Button>         
       </form>
       <div className="mt-[39px] mb-[37px] flex justify-center"><p>Alread have an account?</p> <a>Link</a> </div>
       <div className="flex justify-center">
              <div className="w-[190px] h-[2px] bg-[#BDC1C6]"></div>
              <p className="text-[#BDC1C6] px-[5px]">Or</p>
              <div className="w-[190px] h-[2px] bg-[#BDC1C6]"></div>
       </div>
       <button
      className=" flex justify-center mt-[60px] border-2  border-[#BDC1C6] hover:bg-white w-full px-4 py-2 rounded-xl transition duration-200"
      type="button"
    >
      <Image src={Google} alt="Google" className=" w-[20px] h-[20px] mr-[13px] " />
      Signup with Google
    </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
