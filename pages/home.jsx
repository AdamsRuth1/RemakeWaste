import Btn from "@/components/button/btn";
import Image from "next/image";
import React from "react";
import wastecontainer from "./../public/asset/img/wastecontainer.svg";
import Card from "@/components/card";
import wastesample from "./../public/asset/img/wastesample.svg";
import wastesample1 from "./../public/asset/img/wastesample1.svg";
import wastesample2 from "./../public/asset/img/wastesample2.svg";
import user from "./../public/asset/img/user.svg";
import user1 from "./../public/asset/img/user1.svg";
import user2 from "./../public/asset/img/user2.svg";
import About from "./about";
import Contact from "./contact";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col px-5 md:px-10 lg:px-20 pt-32 pb-20">
      <div className="py-5 grid grid-cols-1  md:grid-cols-2 w-full justify-between gap-16">
        <div className="self-center w-full lg:w-10/12">
          <h1 className="text-3xl lg:text-5xl font-capriola font-normal text-center md:text-justify ">
            Recycle your waste, and earn alonside.
          </h1>
          <p className="text-lg lg:text-xl font-sans my-5 text-center md:text-justify">
            Discover the eco-friendly world where you can sell and recycle your
            waste and get them picked at your doorstep.
          </p>
          <Btn
            label={"Get Started"}
            className="w-full py-4 font-sans font-medium font-lg"
          />
        </div>
        <div className="">
          <Image src={wastecontainer} alt="waste-container" className="" />
        </div>
      </div>
      <div className="flex flex-col justify-center mx-auto my-20  w-full lg:10/12 xl:w-10/12">
        <div className="mb-8 w-full text-brand-100">
          <h2 className=" font-capriola text-2xl lg:text-4xl text-center ">
            What Can You Do With ReMakeWaste?
          </h2>
          <p className="text-center  font-sans text-sm md:text-lg ">
            Unlock a world which is Eco-friendly!
          </p>
          <p className="text-center w-full md:w-3/5 mx-auto text-sm font-sans md:text-lg ">
            ReMakeWaste connects household waste with companies who needs these
            wastes.Discover the Difference!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-5 text-white ">
          <Card className="w-full flex flex-col">
            <Image src={wastesample2} alt="waste sample" className="self-end" />
            <h4 className="font-capriola text-lg mt-3">Recycle your cartons</h4>
            <p className="font-sans text-sm mt-1">
              Sell your used cartons at the best prices with confidence. Get
              your cartons evaluated and know the worth.
            </p>
            <div className="w-full flex justify-center items-center my-6">
              <Btn
                label={"Learn More"}
                className="border px-16 md:px-8 lg:px-16 self-center border-white py-3 mx-auto"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <Image
              src={wastesample}
              alt="waste sample"
              className="self-start md:self-end"
            />
            <h4 className="font-capriola text-lg mt-3">
              Recycle your plastics
            </h4>
            <p className="font-sans text-sm mt-1">
              Sell your used plastics at the best prices with confidence. Get
              your plastics evaluated and know the worth.
            </p>
            <div className="w-full flex justify-center items-center my-6">
              <Btn
                label={"Learn More"}
                className="border px-16 md:px-8 lg:px-16 self-center border-white py-3 mx-auto"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <Image src={wastesample1} alt="waste sample" className="self-end" />
            <h4 className="font-capriola text-lg mt-3">Recycle your glass</h4>
            <p className="font-sans text-sm mt-1">
              Sell your used glass at the best prices with confidence. Get your
              glass evaluated and know the worth.
            </p>
            <div className="w-full flex justify-center items-center my-6">
              <Btn
                label={"Learn More"}
                className="border px-16 md:px-8 lg:px-16 self-center border-white py-3 mx-auto"
              />
            </div>
          </Card>
        </div>
      </div>
      <About id="about" />

      <div className="w-full flex flex-col justify-center items-center my-20">
        <h2 className="text-center font-capriola text-4xl">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-5 text-brand-100 font-sans ">
          <Card className="bg-brand-200 flex flex-col py-8">
            <Image
              src={user}
              alt="waste sample"
              className="self-center mb-10"
            />
            <div className="px-9 md:px-3 xl:px-9">
              <h4 className="font-semibold">Arnold. O</h4>
              <p className="my-3 text-sm ">
                “I was able to clear out my house while making money”
              </p>
            </div>
          </Card>
          <Card className="bg-brand-200 flex flex-col py-8">
            <Image
              src={user1}
              alt="waste sample"
              className="self-center mb-10"
            />
            <div className="px-9 md:px-3 xl:px-9">
              <h4 className="font-semibold">Susan. O</h4>
              <p className="my-3">
                “I am passionate about the environment and was glad to
                contribute to this initiative.”
              </p>
            </div>
          </Card>
          <Card className="bg-brand-200 flex flex-col py-8">
            <Image
              src={user2}
              alt="waste sample"
              className="self-center mb-10"
            />
            <div className="px-9 md:px-3 xl:px-9">
              <h4 className="font-semibold">Esther. U</h4>
              <p className="my-3">
                “I am passionate about the environment and was glad to
                contribute to this initiative.”
              </p>
            </div>
          </Card>
        </div>
      </div>
      <Contact id="contact" />
    </div>
  );
};

export default HomePage;
