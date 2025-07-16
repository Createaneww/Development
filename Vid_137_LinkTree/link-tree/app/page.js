
"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Home() {
  const router = useRouter()
  const [text, settext] = useState("")

  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }

  return (
    <>
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-2 ">
        <div className="flex flex-col items-center justify-center ml-[5vw]">
          <p className="text-[#d2e823] font-extrabold text-[80px] text-left">
            Everything you are. In one,
          </p>
          <p className="text-[#d2e823] font-extrabold text-[78px]">
            simple link in bio.
          </p>
          <p className="text-white text-[18px] font-normal font-sans">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>

          <div className="flex gap-5 mt-6 mr-[159px]">
            <input value={text} onChange={(e) => settext(e.target.value)} className="bg-white text-black p-5 rounded-xl pr-22" type="text" placeholder="Enter your handle" />
            <button onClick={() => createTree()} disabled={text ==""} className=" disabled:bg-slate-900 text-white cursor-pointer bg-[#d2e823] rounded-4xl p-5 px-9 font-semibold">Claim your Linktree</button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ml-[5vw] pt-30">
          <img src="/Screenshot 2025-07-14 163303.png" alt="Homepage img" width={600} />
        </div>
      </section>


     
    </>
  );
}
