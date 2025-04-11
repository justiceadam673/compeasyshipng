"use client";
import React from "react";
import { MapPin, Truck, Home } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className='w-64 h-screen bg-white p-6 shadow-md hidden md:block'>
      <div className='text-2xl font-bold text-purple-600 mb-10'>EasyShip</div>
      <nav className='space-y-4 text-gray-700'>
        <Link
          href='/'
          className='flex items-center gap-3 hover:text-purple-600 transition'
        >
          <Home className='w-5 h-5' /> Dashboard
        </Link>
        <Link
          href='/trackings'
          className='flex items-center gap-3 hover:text-purple-600 transition'
        >
          <MapPin className='w-5 h-5' /> Live Tracking
        </Link>
        <Link
          href='/deliveries'
          className='flex items-center gap-3 hover:text-purple-600 transition'
        >
          <Truck className='w-5 h-5' /> Deliveries
        </Link>
      </nav>
    </aside>
  );
}
