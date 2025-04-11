"use client";
import React from "react";
import { BellIcon } from "lucide-react";

export default function TopBar() {
  return (
    <div className='flex justify-between items-center mb-6'>
      <h1 className='text-2xl font-bold text-gray-800'>Live Tracking</h1>
      <div className='flex items-center gap-4'>
        <button className='relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition'>
          <BellIcon className='w-5 h-5 text-gray-600' />
          <span className='absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full' />
        </button>
        <div className='w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-semibold'>
          J
        </div>
      </div>
    </div>
  );
}
