"use client";
import Card from "@/components/card";
import React from "react";
import earning from "./../public/asset/img/earning.svg";
import cloud from "./../public/asset/img/ic_outline-cloud.svg";
import recycle from "./../public/asset/img/mingcute_recycle-line.svg";
import plastic from "./../public/asset/img/plastic.svg";
import person1 from "./../public/asset/img/person1.svg";
import person2 from "./../public/asset/img/person2.svg";
import person3 from "./../public/asset/img/person3.svg";
import glass from "./../public/asset/img/glass.svg";
import carton from "./../public/asset/img/carton.svg";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { responsive } from "@/components/carousel";
import "./../components/button/btn.css";
import WasteCategory from "./wasteCategory";
import Btn from "@/components/button/btn";
import wastesample from "./../public/asset/img/wastesample.svg";
import wastesample1 from "./../public/asset/img/wastesample1.svg";
import wastesample2 from "./../public/asset/img/wastesample2.svg";
import cart from "./../public/asset/img/cart.svg";
import Contact from "./contact";

const UserDashboard = () => {
  return (
    <div className="pt-32">
      <div className="w-full flex px-4 md:px-10 lg:px-20 ">
        <Card className="w-full flex justify-evenly items-center mx-auto align-middle text-white rounded-[30px] py-10">
          <div className="w-full flex flex-col justify-center items-center   border-r-2 border-white">
            <Image src={earning} alt="earning" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-center font-capriola font-bold text-2xl">
                5000
              </p>
              <p className="text-center font-normal text-base">EARNED</p>
            </div>
          </div>
          <div className="w-full flex-col flex justify-center items-center   border-r-2 border-white">
            <Image src={cloud} alt="cloud" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-center font-capriola font-bold text-2xl">
                500g
              </p>
              <p className="text-center font-normal text-base">SAVED CO2</p>
            </div>
          </div>
          <div className="w-full flex-col flex justify-center items-center  ">
            <Image src={recycle} alt="recycle" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-center font-capriola font-bold text-2xl">20</p>
              <p className="text-center font-normal  text-base">RECYCLED</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-3/4 mx-auto h-96 pl-4 my-20">
        <h2 className="font-capriola text-2xl md:text-3xl font-semibold text-brand-100 mb-5">
          Waste Categories
        </h2>
        <Carousel
          responsive={responsive}
          itemClass="carouselstyle"
          swipeable={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          <Card className="my-3 bg-brand-200 flex flex-col rounded-lg justify-center items-center">
            <Image
              src={plastic}
              alt="plastic"
              className=" lg:w-80 lg:h-80 w-80"
            />
            <p className="font-capriola text-brand-100 my-5 font-bold text-xl">
              Plastics
            </p>
          </Card>
          <Card className="my-3 bg-brand-200 flex flex-col rounded-lg justify-center items-center">
            <Image
              src={carton}
              alt="carton"
              className=" lg:w-80 lg:h-80 w-80"
            />
            <p className="font-capriola text-brand-100 my-5 font-bold text-xl">
              Cartons
            </p>
          </Card>
          <Card className="my-3 bg-brand-200 flex flex-col rounded-lg justify-center items-center">
            <Image src={glass} alt="glass" className=" lg:w-80 lg:h-80 w-80" />
            <p className="font-capriola text-brand-100 my-5 font-bold text-xl">
              Glass
            </p>
          </Card>
          <Card className="my-3 bg-brand-200 flex flex-col rounded-lg justify-center items-center">
            <Image
              src={plastic}
              alt="plastic"
              className=" lg:w-80 lg:h-80 w-80"
            />
            <p className="font-capriola text-brand-100 my-5 font-bold text-xl">
              Plastics
            </p>
          </Card>
          <Card className="my-3 bg-brand-200 flex flex-col rounded-lg justify-center items-center">
            <Image
              src={carton}
              alt="carton"
              className=" lg:w-80 lg:h-80 w-80"
            />
            <p className="font-capriola text-brand-100 my-5 font-bold text-xl">
              Carton
            </p>
          </Card>
          <Card className="my-3 bg-brand-200 flex flex-col rounded-lg justify-center items-center">
            <Image src={glass} alt="glass" className=" lg:w-80 lg:h-80 w-80" />
            <p className="font-capriola text-brand-100 my-5 font-bold text-xl">
              Glass
            </p>
          </Card>
        </Carousel>
      </div>
      <WasteCategory />
      <div className="px-5 md:px-10 lg:px-20">
        <div className="flex flex-col justify-center mx-auto my-20  w-full lg:10/12 xl:w-10/12">
          <div className="mb-8 w-full text-brand-100">
            <h2 className=" font-capriola text-2xl lg:text-4xl text-center ">
              What Can You Do With ReMakeWaste?
            </h2>
            <p className="text-center  font-sans text-sm md:text-lg ">
              Unlock a world which is Eco-friendly!
            </p>
            <p className="text-center w-full md:w-3/5 mx-auto text-sm font-sans md:text-lg ">
              ReMakeWaste makes it easy to sell your recyclable materials from
              home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-5 text-white ">
            <Card className="w-full flex flex-col">
              <Image
                src={wastesample2}
                alt="waste sample"
                className="self-end"
              />
              <h4 className="font-capriola text-lg mt-3">
                Recycle your cartons
              </h4>
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
              <Image
                src={wastesample1}
                alt="waste sample"
                className="self-end"
              />
              <h4 className="font-capriola text-lg mt-3">Recycle your glass</h4>
              <p className="font-sans text-sm mt-1">
                Sell your used glass at the best prices with confidence. Get
                your glass evaluated and know the worth.
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
      </div>
      <div className="px-5 md:px-10 lg:px-20">
        <div
          id="about"
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-32 pt-32 my-20 "
        >
          <div className="font-sans text-brand-100  w-full ">
            <h1 className="text-4xl text-center mb-5">ABOUT US</h1>
            <div className="text-sm lg:text-lg mb-5">
              <p className="text-justify">
                Welcome to ReMakeWaste, we are passionate about protecting the
                environment by ensuring waste and unused pieces in our houses
                are properly recycled while also helping us make money along the
                way. Our journey begins with a vision to create an eco-friendly
                environment thereby creating a safe space for living things.
              </p>
            </div>
            <Btn label={"Get started"} className="w-full py-4" />
          </div>
          <div className="order-first md:order-last hidden md:flex self-center ">
            <Image src={cart} alt="waste-container" className="self-center" />
          </div>
        </div>
      </div>
      <div className="px-5 md:px-10 lg:px-20">
        <div className="w-full flex flex-col justify-center items-center my-20">
          <h2 className="text-center font-capriola text-4xl">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-5 text-brand-100 font-sans ">
            <Card className="bg-brand-200 flex  py-8">
              <Image
                src={person1}
                alt="waste sample"
                className="self-center "
              />
              <div className="ml-2">
                <h4 className="font-semibold">Arnold. O</h4>
                <p className="my-3 text-sm ">
                  “I was able to clear out my house while making money”
                </p>
              </div>
            </Card>
            <Card className="bg-brand-200 flex py-8">
              <Image
                src={person2}
                alt="waste sample"
                className="self-center "
              />
              <div className="ml-2">
                <h4 className="font-semibold">Susan. O</h4>
                <p className="my-3">
                  “I am passionate about the environment and was glad to
                  contribute to this initiative.”
                </p>
              </div>
            </Card>
            <Card className="bg-brand-200 flex py-8">
              <Image
                src={person3}
                alt="waste sample"
                className="self-center"
              />
              <div className="ml-2">
                <h4 className="font-semibold">Esther. U</h4>
                <p className="my-3">
                  “I am passionate about the environment and was glad to
                  contribute to this initiative.”
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-10 lg:px-20">
      <Contact id="contact"/>
      </div>
      
    </div>
  );
};

export default UserDashboard;
