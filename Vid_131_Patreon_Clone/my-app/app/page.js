"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const fadeInUp = (id, delay = 0) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateY(0)' : 'translateY(50px)',
    transition: `all 0.8s ease-out ${delay}s`
  });
  
  return (
    
    <>
      <div className="flex flex-col justify-center items-center gap-3 text-white h-[44vh]">
        <div className="font-bold text-5xl flex gap-2 justify-center items-center max-sm:text-4xl">
          CupFund <span><img className="invertImg" src="/tea.gif" width={85} alt="" /></span>
        </div>

        <p className="text-2xl max-sm:text-xl p-5">A crowdfunding platform for creators. Get funded by your fans and followers</p>

        <div>
          <Link href={"/login"}>
          <button className="hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Start now
          </span>
        </button>
          </Link>
          <Link href={"/about"}>
          <button className="hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read more
            </span>
          </button>
          </Link>
          </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white container mx-auto py-14">
        <h2 className="text-2xl font-bold text-center mb-15">Your fans can buy you a chai</h2>
        <div className="flex gap-5 justify-around max-sm:flex-col">
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

      {/* <div className="text-white container  py-14">
        <h2 className="text-2xl font-bold text-center mb-14">Lear more about us</h2>
        <div className="flex gap-5 justify-around max-sm:flex-col">
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
      </div> */}
      {/* About Section */}
      
      <div className="text-white container mx-auto py-10">
  {/* Expanded Content (Always Visible) */}
  <div className=" rounded-lg p-6 mt-6 animate-on-scroll" id="expanded-content"
               style={fadeInUp('expanded-content')}>
    
    {/* Mission Section */}
    <div className="mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="text-4xl hover:scale-110 transition-transform duration-300">🍵</span>
        <h3 className="text-2xl font-bold text-center">Our Mission</h3>
        <span className="text-4xl hover:scale-110 transition-transform duration-300">🍵</span>
      </div>
      <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
        At <span className="text-white font-semibold">CupFund</span>, our mission is to help creators, freelancers, and changemakers get the support they need from their fans, followers, and community — directly, instantly, and meaningfully. Whether it's funding a project, buying tools, or just a warm cup of chai to keep going, every contribution counts.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {[
        { icon: "👤", title: "🚀 Easy Setup", desc: "Get started in minutes with our simple onboarding process. No technical skills required." },
        { icon: "💰", title: "💰 Quick Payouts", desc: "Receive your funds quickly with multiple payment options and instant notifications." },
        { icon: "🌍", title: "📊 Analytics", desc: "Track your progress with detailed insights and analytics to grow your support base." }
      ].map(({ icon, title, desc }, idx) => (
        <div key={idx} className="text-center bg-slate-950 bg-opacity-65 shadow-xl rounded-lg p-6 hover:bg-opacity-50 transition-all duration-300">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-2 hover:scale-110 transition-transform duration-300 w-16 h-16 flex items-center justify-center">
              <span className="text-2xl">{icon}</span>
            </div>
          </div>
          <h4 className="font-semibold text-lg mb-2">{title}</h4>
          <p className="text-gray-300 text-sm">{desc}</p>
        </div>
      ))}
    </div>

    {/* How It Works */}
    <div className="mb-6">
      <h4 className="text-xl font-bold text-center mb-6">How It Works</h4>
      <div className="flex justify-center items-center gap-4 max-sm:flex-col">
        {[
          { icon: "👤", title: "1. Create Profile", desc: "Set up your creator profile" },
          { icon: "📢", title: "2. Share Link", desc: "Share with your community" },
          { icon: "☕", title: "3. Receive Support", desc: "Get funded by your fans" }
        ].map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-full p-4 mb-3">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <h5 className="font-semibold mb-1">{step.title}</h5>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
            {idx < 2 && <div className="hidden sm:block text-2xl text-gray-400">→</div>}
          </React.Fragment>
        ))}
      </div>
    </div>

    {/* Stats Section */}
    <div className="grid md:grid-cols-3 gap-6 text-center">
      <div className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg p-6">
        <div className="text-3xl font-bold mb-2">10K+</div>
        <div className="text-gray-200">Active Creators</div>
      </div>
      <div className="bg-gradient-to-br from-green-400 to-blue-600 rounded-lg p-6">
        <div className="text-3xl font-bold mb-2">₹50L+</div>
        <div className="text-gray-200">Total Funded</div>
      </div>
      <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-lg p-6">
        <div className="text-3xl font-bold mb-2">1M+</div>
        <div className="text-gray-200">Supporters</div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
