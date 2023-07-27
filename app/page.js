// import "./page.css"
import React from "react";
import Link from "next/link";
import bg from "public/pre-req.png";
import { RxCrossCircled } from "react-icons/rx";
import { BsCheckCircle } from 'react-icons/bs'
import "./page.css";

const crossIcon = <RxCrossCircled />;
const tickIcon = <BsCheckCircle />

export default function Home() {
	return (
		<>
			<div
				className="bg-cover bg-center bg-fixed flex flex-col min-h-screen"
				style={{ backgroundImage: "url('/images/her-bg-dhack.png')" }}
			>
				<div className="text-center flex flex-row justify-between mt-4">
					<div className="text-center flex flex-wrap">
						<p className="text-2xl font-extrabold text-white ml-8" > 🏜 desert hack </p>
						<p className="text-2xl font-extrabold text-orange-500" > . </p>
					</div>
					<div>
						<p className="text-xs font-normal text-white text-opacity-75 mr-8 px-2 border-2 border-white p-1 rounded" >closing in 21d 4hr 3m 5.578sec</p>
					</div>
				</div>
				<div className=" border-t border-white mb-4 mt-2"></div>
				<div className="items-center flex flex-col">
					<div>
						<p className="font-normal text-white text-opacity-75 mb-4 mt-10 px-5 border-2 border-white p-2 rounded-full" >Center for Entrepreneurial Leadership</p>
					</div>
					<div className="text-center whitespace-normal flex flex-wrap">
						<p className="text-6xl font-extrabold text-white mb-2">work on</p>
						<p className="text-6xl font-extrabold text-orange-500 mb-2 ">&nbsp;anything&nbsp;</p>
						<p className="text-6xl font-extrabold text-white mb-4">you want </p>
					</div>
					<p className="text-6xl font-extrabold text-white mb-4">for the next few weeks</p>
					<p className="text-xl font-normal text-white text-opacity-75 mb-10">#DreamsToDemos</p>
					<div className="justify-center flex flex-row">
						<button className="px-6 py-4 mr-6 font-semibold text-black bg-white rounded-md ">bet on yourself 🏜 </button>
						<button className="px-6 py-3 font-semibold text-white border-2 rounded-md ">what is this about?</button>
					</div>
				</div>
			</div>


			<main className="flex min-h-screen flex-col items-center bg-black justify-between p-24">
  <div className="flex flex-col items-center justify-center p-10">
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white">
        so, here's the <p className="text-orange-500 font-bold text-4xl inline">deal</p>!
      </h1>
      <h4 className="mt-0 text-white text-base font-light font-montserrat">
        find frens you can build with but please do something good
        find frens you can build with
      </h4>
    </div>
    <div className="flex">
      <div className="flex flex-col justify-start p-2 h-auto bg-auto" style={{ backgroundImage: "url('/images/Top-Left.png')"}}>
        <h3 className="text-2xl font-montserrat text-white">Make Your Dreams irl</h3>
        <p className="text-base font-montserrat text-white text-left">
          find frens you can build with but please do something
          good find frens you can build with
        </p>
      </div>
      <div className="border border-white flex flex-col justify-start p-2 ml-4 h-auto w-auto bg-auto" style={{ backgroundImage: "url('/images/Top-Right.png')"}}>
        <h3 className="text-2xl font-montserrat text-white">Find Your Tribe</h3>
        <p className="text-base font-montserrat text-white text-left">
          find frens you can build with but please do something
          good
        </p>
      </div>
    </div>
    <div className="flex mt-4">
      <div className="border border-white flex flex-col justify-start p-2 h-auto w-auto bg-auto" style={{ backgroundImage: "url('/images/Bottom-Left.png')"}}>
        <h3 className="text-2xl font-montserrat text-white">No Teaching</h3>
        <p className="text-base font-montserrat text-white text-left">
          find frens you can build with but please do something
          good
        </p>
      </div>
      <div className="border border-white flex flex-col justify-start p-2 ml-4 h-auto w-auto bg-auto" style={{ backgroundImage: "url('/images/Bottom-Right.png')"}}>
        <h3 className="text-2xl font-montserrat text-white">Gigabrains From The Industry</h3>
        <p className="text-base font-montserrat text-white text-left">
          Find frens you can build with but please do something
          good find frens you can build with
        </p>
      </div>
    </div>
  </div>
</main>


			<main
				className="px-12 text-white min-h-[50vh]"
				style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'contain' }}
			>
				<div className="flex min-h-full flex-col items-center justify-start p-24 text-[1rem]">
					<div className="text-2xl md:text-5xl font-bold text-center">
						we won't lie about <br></br>
						having no <span className="text-[#FA8D2A]">pre-requisites</span>
					</div>

					<div className="flex gap-20 items-center justify-start my-16 font-bold">
						<div className="w-100 bg-black boxDiff">
							<h2 className="py-6 px-28 font-bold text-lg">
								you'll be an oddball if you're 🤞
							</h2>
							<hr className="divider"></hr>
							<div className=" flex flex-col gap-4 py-6 px-20 text-[rgb(255,255,255,0.75)] font-normal">
								<div className="flex justify-start  items-center">
									{" "}
									{crossIcon}
									<p className="ml-4">not excited and curious about things</p>
								</div>
								<div className="flex justify-start  items-center">
									{" "}
									{crossIcon}
									<p className="ml-4">not excited and curious about things</p>
								</div>
								<div className="flex justify-start  items-center">
									{" "}
									{crossIcon}
									<p className="ml-4">not excited and curious about things</p>
								</div>
								<div className="flex justify-start  items-center">
									{" "}
									{crossIcon}
									<p className="ml-4">not excited and curious about things</p>
								</div>
							</div>
						</div>
						<div className="w-100 bg-black boxDiff">
							<h2 className="py-6 px-28 font-bold text-lg">
								you'll be an oddball if you're 🤞
							</h2>
							<hr className="divider"></hr>
							<div className=" flex flex-col gap-4 py-6 px-20 text-[rgb(255,255,255,0.75)] font-normal">
								<div className="flex justify-start  items-center">
									{" "}
									{tickIcon}
									<p className="ml-4">not excited and curious about things</p>
								</div>
								<div className="flex justify-start  items-center">
									{" "}
									{tickIcon}
									<p className="ml-4">not excited and curious about things</p>
								</div>
								<div className="flex justify-start  items-center">
									{" "}
									{tickIcon}
									<p className="ml-4">not excited and curious about things</p>
								</div>
								<div className="flex justify-start  items-center">
									{" "}
									{tickIcon}
									<p className="ml-4">not excited and curious about things</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>


		</>
	);
}
