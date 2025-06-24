import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-3 text-white h-[44vh]">
      <div className="font-bold text-5xl">
        Buy me a chai
      </div>

      <p className="text-2xl">A crowdfunding platform for creators. Get funded by your fans and followers</p>

      <div><button className="hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          Start now
        </span>
      </button>
        <button class="hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Read more
          </span>
        </button></div>
    </div>


        <div className="bg-white h-1 opacity-10">
          asdf
        </div>
    </>
  );
}
