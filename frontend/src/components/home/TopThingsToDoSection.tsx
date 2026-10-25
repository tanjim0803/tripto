import React from 'react';
import Image from 'next/image';

const CATEGORIES = [
  { label: 'Explore', icon: '/assets/home/icon-explore.svg', active: true },
  { label: 'Beach', icon: '/assets/home/icon-beach.svg', active: false },
  { label: 'Museum', icon: '/assets/home/icon-museum.svg', active: false },
  { label: 'Show', icon: '/assets/home/icon-show.svg', active: false },
  { label: 'Food', icon: '/assets/home/icon-food.svg', active: false },
  { label: 'Night Life', icon: '/assets/home/icon-nightlife.svg', active: false },
];

const THINGS = [
  { name: 'Sagrada Familia', image: '/assets/home/thing-1.png' },
  { name: 'Park Güell', image: '/assets/home/thing-2.png' },
  { name: 'Casa Milà', image: '/assets/home/thing-3.png' },
  { name: 'Sacred Heart Temple', image: '/assets/home/thing-4.png' },
  { name: 'Arc de Triomf', image: '/assets/home/thing-5.png' },
  { name: 'Casa Batlló', image: '/assets/home/thing-1.png' },
];

export default function TopThingsToDoSection() {
  return (
    <section className="py-20 container-main">
      <h2 className="mb-12 text-neutral-900">Top Things to Do in Barcelona</h2>

      <div className="flex flex-wrap gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.label}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
              cat.active
                ? 'bg-neutral-900 text-white shadow-lg'
                : 'bg-white border border-neutral-200 text-neutral-900 hover:border-neutral-900'
            }`}
          >
            <Image src={cat.icon} alt="" width={20} height={20} className={cat.active ? 'invert' : ''} />
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {THINGS.map((thing, idx) => (
          <div key={idx} className="flex flex-col gap-3 group cursor-pointer">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
              <Image
                src={thing.image}
                alt={thing.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-neutral-900 font-medium text-sm md:text-base group-hover:text-primary transition-colors">
              {thing.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
