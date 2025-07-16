
'use client';
import React, { useRef, useState } from 'react';
import localFont from "next/font/local"
import Link from 'next/link';

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const normalpoppins = localFont({
  src: "./fonts/Poppins-Black.ttf",
  variable: "--font-normalpoppins",
  weight: "100 700",
});

const CardSpotlight = () => {
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);

  const [card1State, setCard1State] = useState({
    isFocused: false,
    position: { x: 0, y: 0 },
    opacity: 0
  });

  const [card2State, setCard2State] = useState({
    isFocused: false,
    position: { x: 0, y: 0 },
    opacity: 0
  });

  // Handlers for Card 1
  const handleMouseMove1 = (e) => {
    if (!divRef1.current || card1State.isFocused) return;

    const div = divRef1.current;
    const rect = div.getBoundingClientRect();

    setCard1State(prev => ({
      ...prev,
      position: { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }));
  };

  const handleFocus1 = () => {
    setCard1State(prev => ({ ...prev, isFocused: true, opacity: 1 }));
  };

  const handleBlur1 = () => {
    setCard1State(prev => ({ ...prev, isFocused: false, opacity: 0 }));
  };

  const handleMouseEnter1 = () => {
    setCard1State(prev => ({ ...prev, opacity: 1 }));
  };

  const handleMouseLeave1 = () => {
    setCard1State(prev => ({ ...prev, opacity: 0 }));
  };

  // Handlers for Card 2
  const handleMouseMove2 = (e) => {
    if (!divRef2.current || card2State.isFocused) return;

    const div = divRef2.current;
    const rect = div.getBoundingClientRect();

    setCard2State(prev => ({
      ...prev,
      position: { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }));
  };

  const handleFocus2 = () => {
    setCard2State(prev => ({ ...prev, isFocused: true, opacity: 1 }));
  };

  const handleBlur2 = () => {
    setCard2State(prev => ({ ...prev, isFocused: false, opacity: 0 }));
  };

  const handleMouseEnter2 = () => {
    setCard2State(prev => ({ ...prev, opacity: 1 }));
  };

  const handleMouseLeave2 = () => {
    setCard2State(prev => ({ ...prev, opacity: 0 }));
  };


  return (
    <>
      <div>
        <h1 className={` mt-15 text-center mb-5 bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-6xl text-transparent  font-bold ${poppins.className}`}>"Shorten. Share. Track."
        </h1>
        <div className={`text-center mb-8 bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text  text-transparent text-3xl ${normalpoppins.className}`}>The smarter way to manage your links.</div>
      </div>
      <div className={`flex justify-between gap-4 mt-20 mb-20 ${poppins.className}`}>
        <div
          ref={divRef1}
          onMouseMove={handleMouseMove1}
          onFocus={handleFocus1}
          onBlur={handleBlur1}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
          className='relative flex h-[50vh] w-150 justify-center overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-slate-950 to-[#3e3e3e] px-8 py-10 shadow-4xl ml-20'
        >
          <div
            className='pointer-events-none absolute -inset-px transition duration-300'
            style={{
              opacity: card1State.opacity,
              background: `radial-gradient(600px circle at ${card1State.position.x}px ${card1State.position.y}px, rgba(255,182,255,.1), transparent 40%)`,
            }}
          />
          <div className='flex flex-col gap-4'>

            <p className='text-4xl text-white font-bold'>The Best url shortner in the market</p>
            <p className='text-xl text-white space-y-6'>We are the most straightforward URL shortener in the world.
              Most URL shorteners track your data or require you to sign up.
              We respect your privacy — no tracking, no logins, just clean, fast link shortening.
              That’s why we built this URL shortener — for users who value simplicity and privacy.</p>
          </div>
        </div>

        <div
          ref={divRef2}
          onMouseMove={handleMouseMove2}
          onFocus={handleFocus2}
          onBlur={handleBlur2}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          className='relative flex h-[50vh] w-150 justify-center overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-[#3e3e3e] to-slate-950 px-8 py-10 shadow-4xl mr-20'
        >
          <div
            className='pointer-events-none absolute -inset-px transition duration-300'
            style={{
              opacity: card2State.opacity,
              background: `radial-gradient(600px circle at ${card2State.position.x}px ${card2State.position.y}px, rgba(255,182,255,.1), transparent 40%)`,
            }}
          />
          <div className="flex flex-col text-white space-y-8">
  <h2 className="text-4xl  font-bold">📊 Link Analytics Preview</h2>

  <div className="space-y-2 text-sm sm:text-base mt-5">
    <p><span className="font-semibold">🔗 Total Clicks:</span> 1,243</p>
    <p><span className="font-semibold">🌍 Top Countries:</span> India, USA, UK</p>
    <p><span className="font-semibold">⏱ Last Clicked:</span> 2 hours ago</p>
  </div>

  <Link href="/generate">
          <span className='relative inline-block overflow-hidden rounded-full p-[1px]'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3e3e3e_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-4xl bg-gray-950 px-7 py-3 font-medium text-gray-50 backdrop-blur-3xl'>
    Generate Urls
      </div>
    </span></Link>

  <p className="text-xs text-gray-400 pt-2">
    Track click performance in real-time — no sign up required.
  </p>
</div>

        </div>
      </div>
    </>
  );
};

export default CardSpotlight;

