import Btn from '@/components/button/btn'
import Image from 'next/image'
import React from 'react'
import cart from "./../public/asset/img/cart.svg";

const About = ({id}) => {
  return (
    <div id={id} className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-32 pt-32 my-20 ">
    <div className="font-sans text-brand-100  w-full ">
      <h1 className="text-4xl text-center mb-5">ABOUT US</h1>
      <div className="text-sm lg:text-lg mb-5">
        <p className="text-justify">
          Welcome to ReMakeWaste, we are passionate about maintaining an
          Eco-friendly environment that also enhances your life style. Our
          journey begins with a vision to create a safe environment for our
          users, offering a wide range of household waste you can sell while
          earning.
        </p>
        <p className="text-justify">
          {" "}
          We also believe in transparency and customer satisfaction that is
          why we strive to deliver exceptional service and checks every time
          you have business with us.
        </p>
      </div>
      <Btn label={"Get started"} className="w-full py-4" />
    </div>
    <div  className="order-first md:order-last flex self-center ">
      <Image src={cart} alt="waste-container"  className="self-center" />
    </div>
  </div>
  )
}

export default About