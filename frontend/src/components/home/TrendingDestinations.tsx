import React from 'react';
import Image from 'next/image';

const SEASONS = [
  { label: 'Spring Picks', icon: '/assets/home/spring-icon.svg', active: true },
  { label: 'Summer Hotspot', icon: '/assets/home/summer-icon.svg', active: false },
  { label: 'Autumn Escape', icon: '/assets/home/autumn-icon.svg', active: false },
  { label: 'Winter Getaway', icon: '/assets/home/winter-icon.svg', active: false },
];

const DESTINATIONS = [
  {
    city: 'Paris, France',
    price: '128',
    description: 'Romantic escapes, art, and cafés.',
    image: '/assets/home/dest-paris.png',
  },
  {
    city: 'Santorini, Greece',
    price: '225',
    description: 'Sunsets, sea views, and serenity.',
    image: '/assets/home/dest-santorini.png',
  },
  {
    city: 'Bali, Indonesia',
    price: '26',
    description: 'Beaches, nature, and calm vibes.',
    image: '/assets/home/dest-bali.png',
  },
  {
    city: 'Kyoto, Japan',
    price: '190',
    description: 'Cherry blossoms and temples.',
    image: '/assets/home/dest-kyoto.png',
  },
];

export default function TrendingDestinations() {
  return (
    <section className="py-20 container-main">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-neutral-900">Trending Destinations</h2>

          <div className="flex flex-wrap gap-3">
            {SEASONS.map((season) => (
              <button
                key={season.label}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  season.active
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white border border-neutral-900 text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                <Image src={season.icon} alt="" width={18} height={18} className={season.active ? 'invert' : ''} />
                {season.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest, idx) => (
            <div
              key={idx}
              className="group relative h-[520px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <Image
                src={dest.image}
                alt={dest.city}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-1">{dest.city}</h3>
                <div className="flex items-center gap-1 text-warning-500 font-medium text-lg mb-2">
                  <span className="text-neutral-200 text-sm">From ${dest.price}</span>
                  <span className="text-neutral-200 text-sm">/night</span>
                </div>
                <p className="text-neutral-300 text-sm line-clamp-2">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
