export default function HeroPage() {
    return (
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
    );
}