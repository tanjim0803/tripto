"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const GUEST_HOMES = [
  {
    title: 'Azure Horizon Hotel',
    location: 'Nice, France',
    rating: '5.0',
    reviewText: 'Excellent',
    reviewCount: '350 reviews',
    price: '165',
    image: '/assets/home/guest-1.png',
  },
  {
    title: 'Palm Grove House',
    location: 'Algarve, Portugal',
    rating: '5.0',
    reviewText: 'Excellent',
    reviewCount: '200 reviews',
    price: '175',
    image: '/assets/home/guest-2.png',
  },
  {
    title: 'Casa Tranquila Guesthouse',
    location: 'Tulum, Mexico',
    rating: '4.8',
    reviewText: 'Very Good',
    reviewCount: '160 reviews',
    price: '145',
    image: '/assets/home/guest-3.png',
  },
  {
    title: 'Villa San Martino Guesthouse',
    location: 'Amalfi Coast, Italy',
    rating: '5.0',
    reviewText: 'Excellent',
    reviewCount: '160 reviews',
    price: '190',
    image: '/assets/home/guest-4.png',
  },
  {
    title: 'Mountain Peak Retreat',
    location: 'Banff, Canada',
    rating: '4.9',
    reviewText: 'Excellent',
    reviewCount: '120 reviews',
    price: '210',
    image: '/assets/home/guest-1.png', // Placeholder
  },
  {
    title: 'Emerald Isle Cottage',
    location: 'Galway, Ireland',
    rating: '4.7',
    reviewText: 'Very Good',
    reviewCount: '80 reviews',
    price: '130',
    image: '/assets/home/guest-2.png', // Placeholder
  },
];

export default function HomesGuestsLoveSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (GUEST_HOMES.length - itemsPerPage + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? GUEST_HOMES.length - itemsPerPage : prev - 1));
  };

  return (
    <section className="py-20 container-main overflow-hidden">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-neutral-900">Homes Guests Love</h2>
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-neutral-200 hover:bg-white transition-all bg-white active:scale-90 shadow-sm"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-neutral-200 hover:bg-white transition-all bg-white active:scale-90 shadow-sm"
          >
            <ChevronRight className="w-6 h-6 text-neutral-600" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden px-2">
        <div
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{ transform: `translateX(calc(-${currentIndex * 25}% - ${currentIndex * 1.5}rem))` }}
        >
          {GUEST_HOMES.map((home, idx) => (
            <div
              key={idx}
              className="min-w-[calc(25%-1.5rem)] sm:min-w-[calc(50%-1.5rem)] lg:min-w-[calc(25%-1.5rem)]"
            >
              <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden group transition-all hover:shadow-md h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={home.image}
                    alt={home.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-md hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-neutral-600 hover:text-red-500 transition-colors" />
                  </button>
                </div>

                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-neutral-100 px-2 py-1 rounded-md text-primary font-bold text-xs">
                      {home.rating}
                    </div>
                    <span className="text-neutral-900 font-medium text-xs">{home.reviewText}</span>
                    <span className="text-neutral-400 text-xs">{home.reviewCount}</span>
                  </div>

                  <div className="min-h-[3rem]">
                    <h3 className="text-xl font-semibold text-neutral-900 truncate">{home.title}</h3>
                    <p className="text-neutral-400 text-sm">{home.location}</p>
                  </div>

                  <div className="flex items-center justify-end mt-2">
                    <p className="text-neutral-400 text-xs mr-2">per night</p>
                    <p className="text-neutral-900 font-bold text-lg">${home.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
