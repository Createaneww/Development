import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 text-white h-[44vh]">
        <div className="font-bold text-5xl flex gap-2 justify-center items-center">
          Buy me a chai <span><img src="/tea.gif" width={85} alt="" /></span>
        </div>

        <p className="text-2xl">A crowdfunding platform for creators. Get funded by your fans and followers</p>

        <div><button className="hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Start now
          </span>
        </button>
          <button className="hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read more
            </span>
          </button></div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white container mx-auto py-14">
        <h2 className="text-2xl font-bold text-center mb-15">Your fans can buy you a chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="items space-y-1 flex flex-col justify-center items-center">
            <img className="bg-white rounded-full p-2" width={88} src="/man.gif" alt="" />
            <p className="font-bold text-sm">Fund yourself</p>
            <p>Your fans are available to help you</p>
          </div>
          <div className="items space-y-1 flex flex-col justify-center items-center">
            <img className="bg-white rounded-full p-2" width={88} src="/coin.gif" alt="" />
            <p className="font-bold text-sm">Fund yourself</p>
            <p>Your fans are available to help you</p>
          </div>
          <div className="items space-y-1 flex flex-col justify-center items-center">
            <img className="bg-white rounded-full p-2" width={88} src="/group.gif" alt="" />
            <p className="font-bold text-sm">Fund yourself</p>
            <p>Your fans are available to help you</p>
          </div>
        </div>
      </div>

 <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx- py-14">
        <h2 className="text-2xl font-bold text-center mb-14">Lear more about us</h2>
        <div className="flex gap-5 justify-around">
          <div className="items space-y-1 flex flex-col justify-center items-center">
            <img className="bg-white rounded-full p-2" width={88} src="/man.gif" alt="" />
            <p className="font-bold text-sm">Fund yourself</p>
            <p>Your fans are available to help you</p>
          </div>
          <div className="items space-y-1 flex flex-col justify-center items-center">
            <img className="bg-white rounded-full p-2" width={88} src="/coin.gif" alt="" />
            <p className="font-bold text-sm">Fund yourself</p>
            <p>Your fans are available to help you</p>
          </div>
          <div className="items space-y-1 flex flex-col justify-center items-center">
            <img className="bg-white rounded-full p-2" width={88} src="/group.gif" alt="" />
            <p className="font-bold text-sm">Fund yourself</p>
            <p>Your fans are available to help you</p>
          </div>
        </div>
      </div>
    </>
  );
}
