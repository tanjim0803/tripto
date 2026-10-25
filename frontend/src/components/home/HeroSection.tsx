import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-b-[32px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/home/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-main h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="max-w-3xl leading-tight mb-4">
          Your Trip Starts Here
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl opacity-90">
          Find unique stays across hotels, villas, and more.
        </p>

        {/* Search Box */}
        <div className="mt-12 w-full max-w-6xl bg-white rounded-[24px] p-4 md:p-6 shadow-2xl flex flex-col lg:flex-row gap-4 items-stretch">

          {/* Location Input */}
          <div className="flex-1 flex flex-col justify-center p-4 border-r border-neutral-100 hover:bg-neutral-50 transition-colors cursor-pointer rounded-xl">
            <span className="text-neutral-900 font-medium text-sm md:text-base">Location</span>
            <span className="text-neutral-400 text-xs md:text-sm">Where are you going?</span>
          </div>

          {/* Date Range */}
          <div className="flex flex-1 gap-4 p-4 border-r border-neutral-100 hover:bg-neutral-50 transition-colors cursor-pointer rounded-xl">
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-neutral-900 font-medium text-sm md:text-base">Check In</span>
              <span className="text-neutral-400 text-xs md:text-sm">Add Dates</span>
            </div>
            <div className="flex-1 flex flex-col justify-center border-l pl-4 border-neutral-100">
              <span className="text-neutral-900 font-medium text-sm md:text-base">Check Out</span>
              <span className="text-neutral-400 text-xs md:text-sm">Add Dates</span>
            </div>
          </div>

          {/* Guests */}
          <div className="flex-1 flex flex-col justify-center p-4 hover:bg-neutral-50 transition-colors cursor-pointer rounded-xl">
            <span className="text-neutral-900 font-medium text-sm md:text-base">Rooms and Guests</span>
            <span className="text-neutral-400 text-xs md:text-sm">1 rooms, 1 adults, 0 children</span>
          </div>

          {/* Search Button */}
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 shrink-0">
            <Image src="/assets/home/search-icon.svg" alt="" width={20} height={20} className="invert" />
            Search
          </button>
        </div>

        {/* Quick Property Filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { label: 'Hotel', icon: '/assets/home/hotel-icon.svg' },
            { label: 'House', icon: '/assets/home/house-icon.svg' },
            { label: 'Guest House', icon: '/assets/home/guesthouse-icon.svg' },
            { label: 'Cabins', icon: '/assets/home/cabin-icon.svg' },
            { label: 'Glamping', icon: '/assets/home/glamping-icon.svg' },
            { label: 'Doms', icon: '/assets/home/dome-icon.svg' },
          ].map((prop) => (
            <button key={prop.label} className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white/40 transition-all">
              <Image src={prop.icon} alt={prop.label} width={18} height={18} className="invert" />
              <span className="text-sm font-medium">{prop.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
