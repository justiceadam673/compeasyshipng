"use client"; // Add this to mark the file as a client component

import React, { useState } from "react";
import Image from "next/image"; // Import Image component for optimized images
import Link from "next/link"; // Import Link for navigation

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center bg-gray-100 px-6 sm:px-10 py-6 ">
        {/* Logo */}
        <Image
          src="/assets/images/Easyship_111900.svg"
          alt="EasyShip Logo"
          width={150.75}
          height={129}
          className="bg-no-repeat bg-contain"
        />

        <h1 className="md:text-2xl font-bold text-[#2b2c4f] mt-[33px] text-[27px]">Welcome back.</h1>
        <p className="text-[#2b2c4f]/65 mb-[34px] mr-[10px] text-[15px]">Log in to continue</p>

        {/* Form */}
        <div className="w-full max-w-sm">
          <div className="relative w-full mb-3">
            <input
              type="email"
              placeholder="Email"
              className="w-[332.25px] h-[36.75px] text-black placeholder:text-[12px] placeholder:inset-3 py-[10px] pl-[45px] pr-[8px] space-x-[8px] border-[#9e9e9e]/60 border-[2px] rounded-[11.25px] focus:outline-none focus:ring-2 focus:ring-blue-500  mb-[16.5px]"
            />
            <Image
              src="/assets/images/iconamoon_profile-fill.png"
              alt="Email Icon"
              width={20}
              height={20}
              className="absolute left-3 top-3"
            />
          </div>

          <div className="relative w-full mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-[332.25px] h-[36.75px] text-black placeholder:text-[12px] placeholder:inset-3 py-[10px] pl-[45px] pr-[8px] space-x-[8px] border-[#9e9e9e]/60 border-[2px] rounded-[11.25px] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[16.5px]"
            />
            <Image
              src="/assets/images/majesticons_key.png"
              alt="Password Icon"
              width={20}
              height={20}
              className="absolute left-3 top-3"
            />
            <Image
              // src={showPassword ? "/assets/images/eye-open.png" : "/images/majesticons_eye-off.png"}
              alt="Toggle Password"
              width={15}
              height={15}
              className="absolute left-[301px] top-[10px] w-[15px] h-[15px] bg-no-repeat bg-contain cursor-pointer text-black"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {/* Login Button */}
          <button className="w-[332.25px] h-[36.75px] flex items-center justify-center py-3 bg-gradient-to-r from-[#00aeef] to-[#2e3192] text-white font-semibold rounded-[11.25px] p-[10px]">
            Log in
          </button>

          {/* Signup Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
  Don’t have an account? 
  <Link href="/signup" className="text-blue-600 font-semibold">Sign up</Link>
</p>

        </div>
      </div>

      {/* Right Section - Background Image */}
      <div
        className="lg:w-1/2 w-full bg-no-repeat bg-cover bg-right lg:block hidden"
        style={{ backgroundImage: "url('/assets/images/Frame 32.png')" }}
      ></div>
    </div>
  );
};

export default Login;
