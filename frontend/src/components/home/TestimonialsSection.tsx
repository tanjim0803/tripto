"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'Frequent Traveler',
    text: 'Tripto made our honeymoon trip to Santorini absolutely seamless. The curated stays were breathtaking!',
    rating: 5,
    image: '/assets/home/avatar.png',
  },
  {
    name: 'Michael Chen',
    role: 'Digital Nomad',
    text: 'Finding long-term stays with great Wi-Fi and local vibes in Bali was so easy. Highly recommend!',
    rating: 5,
    image: '/assets/home/avatar.png',
  },
  {
    name: 'Emma Wilson',
    role: 'Family Vacationer',
    text: 'The app is so intuitive. We found a perfect family villa in Tuscany that fit our budget and needs.',
    rating: 4,
    image: '/assets/home/avatar.png',
  },
  {
    name: 'Oliver Smith',
    role: 'Travel Enthusiast',
    text: 'The most smooth booking experience I\'ve ever had for family vacations. Great choices and clear pricing!',
    rating: 5,
    image: '/assets/home/avatar.png',
  },
  {
    name: 'Sophia Martinez',
    role: 'Solo Adventurer',
    text: 'I love how easy it is to find hidden gems. My trip to Kyoto was perfectly planned thanks to Tripto.',
    rating: 5,
    image: '/assets/home/avatar.png',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (TESTIMONIALS.length - itemsPerPage + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - itemsPerPage : prev - 1));
  };

  return (
    <section className="py-20 bg-neutral-50 overflow-hidden">
      <div className="container-main">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-neutral-900">Let's see what people think of Tripto</h2>
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
            className="flex transition-transform duration-500 ease-out gap-8"
            style={{ transform: `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex * 2}rem))` }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="min-w-[calc(33.333%-2rem)] sm:min-w-[calc(50%-2rem)] lg:min-w-[calc(33.333%-2rem)]"
              >
                <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all h-full relative overflow-hidden group">
                  <Quote className="w-12 h-12 text-primary-50 absolute -top-2 -right-2 rotate-12 group-hover:rotate-0 transition-transform duration-300" />

                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <Image src={t.image} alt={t.name} width={48} height={48} className="rounded-full" />
                    <div>
                      <p className="font-semibold text-neutral-900">{t.name}</p>
                      <p className="text-neutral-400 text-xs">{t.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src="/assets/home/star-icon.svg"
                        alt="star"
                        width={16}
                        height={16}
                        className={cn(i < t.rating ? 'opacity-100' : 'opacity-30')}
                      />
                    ))}
                  </div>

                  <p className="text-neutral-600 italic leading-relaxed relative z-10">
                    "{t.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
