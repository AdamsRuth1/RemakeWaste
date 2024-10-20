import Btn from '@/components/button/btn'
import React from 'react'

const Contact = ({id}) => {
  return (
    <div id={id} className="w-full pt-32 my-20  flex flex-col text-brand-100 justify-center items-center">
    <div className="mb-8 flex flex-col w-full justify-center items-center">
    <h3 className="font-capriola text-3xl mb-3">Message Us</h3>
    <p className="font-sans text-lg">We will get back to you within 24 hours</p>
    </div>
    <div className="w-full">
      <form
        action=""
        className=" flex flex-col justify-center items-center lg:w-3/4 mx-auto"
      >
        <div className="flex w-full flex-col mb-3">
          <label htmlFor="name" className="font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter your Full Name..."
            className="w-full py-3 rounded-3xl px-8 border border-brand-100"
          />
        </div>
        <div className="flex w-full flex-col mb-3">
          <label htmlFor="email" className="font-semibold mb-2">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email..."
            className="w-full py-3 rounded-3xl px-8 border border-brand-100"
          />
        </div>
        <div className="flex w-full flex-col mb-3">
          <label htmlFor="" className="font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter your Phone Number..."
            className="w-full py-3 rounded-3xl px-8 border border-brand-100"
          />
        </div>
        <div className="flex w-full flex-col mb-3">
          <label htmlFor="" className="font-semibold mb-2">Message</label>
          <textarea name="textarea" id="textarea" rows="6" cols="50" className="w-full py-3 rounded-3xl px-8 border border-brand-100"></textarea>
        </div>
        <div className="flex w-full flex-col my-5">
        <Btn label={"Send Message"} className="w-full font-bold  py-3 rounded-3xl px-8 border border-brand-100"/>
        </div> 
       
      </form>
    </div>
  </div>
  )
}

export default Contact