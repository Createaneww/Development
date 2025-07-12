"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const serachparams = useSearchParams()
  return (
    <div>
      Hey i am mainn page 
      <div>Your blog is {serachparams.get('blog')} and your utm_source is {serachparams.get('utm_source')}</div>
    </div>
  );
}
