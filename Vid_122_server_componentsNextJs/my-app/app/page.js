"use client"
import { useEffect , useState } from "react";

export default function Home() {
const [count, setCount] = useState(0)
  return (
    <>
    <div>
      I am Home-page {count}
    </div>
    <button className="bg-white text-black" onClick={()=> setCount( count+1)}>
      clickme +
    </button>
    </>
  );

}
