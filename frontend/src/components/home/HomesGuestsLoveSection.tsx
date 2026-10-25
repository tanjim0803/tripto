import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

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
];

export default function HomesGuestsLoveSection() {
  return (
    <section className="py-20 container-main">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-neutral-900">Homes Guests Love</h2>
        <div className="flex gap-3">
          <button className="p-2 rounded-full border border-neutral-200 hover:bg-white transition-colors bg-white">
            <span className="sr-only">Previous</span>
            <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button className="p-2 rounded-full border border-neutral-200 hover:bg-white transition-colors bg-white">
            <span className="sr-only">Next</span>
            <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GUEST_HOMES.map((home, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-neutral-100 overflow-hidden group transition-all hover:shadow-md">
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

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 truncate">{home.title}</h3>
                <p className="text-neutral-400 text-sm">{home.location}</p>
              </div>

              <div className="flex items-center justify-end mt-2">
                <p className="text-neutral-400 text-xs mr-2">per night</p>
                <p className="text-neutral-900 font-bold text-lg">${home.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
