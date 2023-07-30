"use client";
import bg from "public/images/pre-req.png";
import { RxCrossCircled } from "react-icons/rx";
import { BsCheckCircle } from "react-icons/bs";
import "./page.css";
import React, { useState, useEffect } from "react";
import Head from "next/head";

const crossIcon = <RxCrossCircled />;
const tickIcon = <BsCheckCircle />;

const FINAL_DATE = new Date("2023-08-26").getTime();

function getTimeRemaining() {
  const now = new Date().getTime();
  const timeRemaining = FINAL_DATE - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

export default function Home() {
  const [hydrated, setHydrated] = React.useState(false);
  const [countdown, setCountdown] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(getTimeRemaining());
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const handleButton1Click = () => {
    window.location.href =
      "https://airtable.com/appBG2GA6I0I10YGQ/shrabkWrnUOOGhHjO";
  };
  const handleButton2Click = () => {
    window.location.href =
      "https://sxmawl.notion.site/here-s-our-2-cents-83f18ae05d0040a4aeeeb11f10bfc850?pvs=4";
  };

  return (
    <div className="">
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <div
          className="bg-cover bg-center flex flex-col pb-24 md:pb-0 md:min-h-screen"
          style={{ backgroundImage: "url('/images/her-bg-dhack.png')" }}
        >
          <div className="text-center flex flex-col md:flex-row justify-between mt-4 px-8">
            <div className="text-center justify-center flex flex-wrap">
              <p className="flex gap-2 items-center justify-center text-2xl font-extrabold text-white mb-1">
                <img src="/images/dh-emoji.png" className="h-8" /> desert hack{" "}
              </p>
              <p className="text-2xl font-extrabold text-orange-500"> . </p>
            </div>
            <div>
              <p className=" text-xs md:text-sm font-medium text-white text-opacity-75 px-2  p-1 rounded">
                closing in {countdown.days}d {countdown.hours}hr{" "}
                {countdown.minutes}m {countdown.seconds}s
              </p>
            </div>
          </div>
          <div className=" border-t border-white mb-4 mt-2"></div>
          <div className="items-center flex flex-col">
            <div>
              <p className="font-normal text-white text-opacity-75 my-6 md:mb-4 md:mt-10 px-5 boxDiff p-2 rounded-full">
                Center for Entrepreneurial Leadership
              </p>
            </div>
            <p className="whitespace-normal text-center flex-wrap text-3xl md:text-6xl font-extrabold text-white mb-4 inline">
              work on
              <span className="text-4xl md:text-6xl font-extrabold text-orange-500 mb-2 inline">
                &nbsp;anything&nbsp; <br className="block md:hidden"></br>
              </span>
              you want <br className=" hidden md:block"></br>for the next few weeks
            </p>

            <p className="text-md md:text-xl font-bold text-center flex-col text-white text-opacity-90 mb-10">
              #DreamsToDemos <br></br> 27th aug - 30th sept
            </p>
            <div className="justify-center flex flex-col items-center md:flex-row">
              <button
                onClick={handleButton1Click}
                className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 px-6 py-4 font-semibold text-black bg-white rounded-md "
              >
                bet on yourself 🏜{" "}
              </button>
              <button
                onClick={handleButton2Click}
                className="w-full md:w-auto px-6 py-4 font-semibold text-white wtf "
              >
                what is this about?
              </button>
            </div>
          </div>
        </div>

        <main className="flex min-h-screen flex-col items-center bg-black justify-between px-8 py-12 md:px-24 md:py-24">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mb-4 md:mb-10 text-center">
              <h1 className=" text-4xl md:text-5xl font-bold text-white">
                so, here's the{" "}
                <p className="text-orange-500 font-bold inline">deal</p>!
              </h1>
              <h4 className="mt-4 text-[rgb(255,255,255,0.75)] text-sm md:text-base font-light ">
                find frens you can build with but please do something good find
                frens you can build with
              </h4>
            </div>

            <div className="flex flex-col md:flex-row w-full">
              <div
                className="flex w-full my-4 md:my-0 md:w-3/4 flex-col boxDiff justify-center md:justify-end text-center md:text-left px-10 py-20 md:px-7 md:pt-64 md:pb-7 h-auto bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/life.png')" }}
              >
                <h3 className="text-3xl font-bold  text-white">
                  make your Dreams irl
                </h3>
                <p className=" text-sm mt-2 text-[rgb(255,255,255,0.75)] font-normal">
                  find frens you can build with but please do something
                </p>
              </div>
              <div
                className="border w-full my-2 md:my-0 md:w-1/4 boxDiff flex flex-col justify-center md:justify-start text-center md:text-left px-10 py-20 md:pb-64 md:px-7 md:pt-7 md:ml-4 h-auto bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/tribe.png')" }}
              >
                <h3 className="text-3xl font-bold  text-white">
                  find your tribe
                </h3>
                <p className=" text-sm mt-2 text-[rgb(255,255,255,0.75)] font-normal">
                  find frens you can build with <br></br> but please do
                  something
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full md:mt-4">
              <div
                className="border w-full my-2 md:my-0 md:w-1/4 boxDiff flex flex-col justify-center md:justify-start text-center md:text-left  px-10 py-20 md:pb-64 md:px-7 md:pt-7 h-auto bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/teach.png')" }}
              >
                <h3 className="text-3xl font-bold  text-white">no teaching</h3>
                <p className="text-sm mt-2 text-[rgb(255,255,255,0.75)] font-normal">
                  find frens you can build with <br></br> but please do
                  something
                </p>
              </div>
              <div
                className="flex w-full my-2 md:my-0 md:w-3/4 flex-col boxDiff justify-center md:justify-end text-center md:text-left  px-10 py-20 md:px-7 md:pt-64 md:pb-7 md:ml-4 h-auto bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/brains.png')" }}
              >
                <h3 className="text-3xl font-bold  text-white">
                  experts for you
                </h3>
                <p className="text-sm mt-2 text-[rgb(255,255,255,0.75)] font-normal">
                  find frens you can build with but please do something
                </p>
              </div>
            </div>
          </div>
        </main>

        <main
          className="px-6 py-6 md:py-0 md:px-12 text-white min-h-[50vh]"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex min-h-full flex-col items-center justify-start p-0 md:p-24 text-[1rem]">
            <div className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-0">
              we won't lie about <br></br>
              having no <span className="text-[#FA8D2A]">pre-requisites</span>
            </div>

            <div className="flex-col md:flex md:flex-row gap-20 items-center justify-start my-4 md:my-16 font-bold">
              <div className="w-100 bg-black boxDiff">
                <h2 className="py-6 px-6 md:px-24 font-bold text-lg text-center">
                  you'll be an oddball if you're 🤞
                </h2>
                <hr className="divider"></hr>
                <div className=" flex flex-col gap-4 py-6 px-6 md:px-12 text-[rgb(255,255,255,0.75)] font-normal text-sm md:text-base">
                  <div className="flex justify-start  items-center">
                    {" "}
                    {crossIcon}
                    <p className="ml-4">not excited and curious about things</p>
                  </div>
                  <div className="flex justify-start  items-center">
                    {" "}
                    {crossIcon}
                    <p className="ml-4">expecting yet another course for CV</p>
                  </div>
                  <div className="flex justify-start  items-center">
                    {" "}
                    {crossIcon}
                    <p className="ml-4">unable to take a bet on yourself</p>
                  </div>
                  <div className="flex justify-start  items-center">
                    {" "}
                    {crossIcon}
                    <p className="ml-4">looking to get a certificate</p>
                  </div>
                </div>
              </div>
              <div className="w-100 bg-black boxDiff mt-6 md:mt-0">
                <h2 className="py-6 px-6 md:px-24 text-center font-bold text-lg">
                  you'll make it if you're 🔥
                </h2>
                <hr className="divider"></hr>
                <div className=" flex flex-col gap-4 py-6 px-6 md:px-12 text-[rgb(255,255,255,0.75)] font-normal text-sm md:text-base">
                  <div className="flex justify-start  items-center">
                    {" "}
                    {tickIcon}
                    <p className="ml-4">a kickass problem-solver</p>
                  </div>
                  <div className="flex justify-start  items-center">
                    {" "}
                    {tickIcon}
                    <p className="ml-4">
                      seeking a partner to uplift your ideas w you.
                    </p>
                  </div>
                  <div className="flex justify-start  items-center">
                    {" "}
                    {tickIcon}
                    <p className="ml-4">fond of pulling all-nighters</p>
                  </div>
                  <div className="flex justify-start  items-center">
                    {" "}
                    {tickIcon}
                    <p className="ml-4">a trustworthy partner fr fr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="bg-black flex flex-col ">
          <div className="text-center flex flex-row justify-center md:justify-between mt-4 mb-4">
            <div className="text-center flex flex-wrap">
              <p className="text-[rgb(255,255,255,0.75)] ml-8 mt-1">
                {" "}
                an initiative by&nbsp;&nbsp;
              </p>
              <img src="/images/cel-logo.png" className="h-8" />
            </div>
            <div>
              <p className="text-xs font-normal text-white text-opacity-75 mr-8 px-2"></p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
