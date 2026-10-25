import React from 'react';
import Image from 'next/image';

const SIGHTS = [
  {
    name: 'Sassnitz',
    flag: '/assets/home/flag-fi.svg',
    image: '/assets/home/sight-1.png',
    size: 'large',
  },
  {
    name: 'Binz',
    flag: '/assets/home/flag-vn.svg',
    image: '/assets/home/sight-2.png',
    size: 'large',
  },
  {
    name: 'Sagard',
    flag: '/assets/home/flag-sh.svg',
    image: '/assets/home/sight-3.png',
    size: 'small',
  },
  {
    name: 'Bergen',
    flag: '/assets/home/flag-pm.svg',
    image: '/assets/home/sight-4.png',
    size: 'small',
  },
  {
    name: 'Freedom',
    flag: '/assets/home/flag-um.svg',
    image: '/assets/home/sight-5.png',
    size: 'small',
  },
];

export default function TopSightsSection() {
  return (
    <section className="py-20 container-main">
      <h2 className="mb-12 text-neutral-900">Top Sights to See</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {SIGHTS.map((sight, idx) => (
          <div
            key={idx}
            className={`relative group overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer ${
              sight.size === 'large' ? 'w-full md:w-[608px] h-[248px]' : 'w-full md:w-[400px] h-[248px]'
            }`}
          >
            <Image
              src={sight.image}
              alt={sight.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute top-6 left-6 flex items-center gap-3 text-white">
              <h3 className="text-2xl font-semibold">{sight.name}</h3>
              <div className="w-8 h-5 relative">
                <Image src={sight.flag} alt="flag" fill className="object-cover rounded-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
