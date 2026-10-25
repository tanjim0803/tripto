"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { label: 'Explore', icon: '/assets/home/icon-explore.svg', value: 'explore' },
  { label: 'Beach', icon: '/assets/home/icon-beach.svg', value: 'beach' },
  { label: 'Museum', icon: '/assets/home/icon-museum.svg', value: 'museum' },
  { label: 'Show', icon: '/assets/home/icon-show.svg', value: 'show' },
  { label: 'Food', icon: '/assets/home/icon-food.svg', value: 'food' },
  { label: 'Night Life', icon: '/assets/home/icon-nightlife.svg', value: 'nightlife' },
];

const THINGS_BY_CATEGORY: Record<string, any[]> = {
  explore: [
    { name: 'Sagrada Familia', image: '/assets/home/thing-1.png' },
    { name: 'Park Güell', image: '/assets/home/thing-2.png' },
    { name: 'Casa Milà', image: '/assets/home/thing-3.png' },
    { name: 'Sacred Heart Temple', image: '/assets/home/thing-4.png' },
    { name: 'Arc de Triomf', image: '/assets/home/thing-5.png' },
    { name: 'Casa Batlló', image: '/assets/home/thing-1.png' },
  ],
  beach: [
    { name: 'Barceloneta Beach', image: '/assets/home/thing-1.png' },
    { name: 'Bogatell Beach', image: '/assets/home/thing-2.png' },
    { name: 'Nova Icaria', image: '/assets/home/thing-3.png' },
    { name: 'Mar Bella', image: '/assets/home/thing-4.png' },
    { name: 'Port Olímpic', image: '/assets/home/thing-5.png' },
    { name: 'Coastal Path', image: '/assets/home/thing-1.png' },
  ],
  museum: [
    { name: 'Picasso Museum', image: '/assets/home/thing-1.png' },
    { name: 'Joan Miró Foundation', image: '/assets/home/thing-2.png' },
    { name: 'MNAC', image: '/assets/home/thing-3.png' },
    { name: 'MACBA', image: '/assets/home/thing-4.png', },
    { name: 'CCCB', image: '/assets/home/thing-5.png' },
    { name: 'Museum of History', image: '/assets/home/thing-1.png' },
  ],
  show: [
    { name: 'La Pedrera', image: '/assets/home/thing-1.png' },
    { name: 'Flamenco Show', image: '/assets/home/thing-2.png' },
    { name: 'Magic Fountain', image: '/assets/home/thing-3.png' },
    { name: 'Tibidabo Park', image: '/assets/home/thing-4.png' },
    { name: 'Liceu Opera', image: '/assets/home/thing-5.png' },
    { name: 'Street Performers', image: '/assets/home/thing-1.png' },
  ],
  food: [
    { name: 'La Boqueria', image: '/assets/home/thing-1.png' },
    { name: 'Tapas Bar', image: '/assets/home/thing-2.png' },
    { name: 'Paella Spot', image: '/assets/home/thing-3.png' },
    { name: 'Gothic Quarter Cafés', image: '/assets/home/thing-4.png' },
    { name: 'Modernist Bakery', image: '/assets/home/thing-5.png' },
    { name: 'Wine Cellars', image: '/assets/home/thing-1.png' },
  ],
  nightlife: [
    { name: 'Opium Barcelona', image: '/assets/home/thing-1.png' },
    { name: 'Pacha', image: '/assets/home/thing-2.png' },
    { name: 'Razzmatazz', image: '/assets/home/thing-3.png' },
    { name: 'Sutton Club', image: '/assets/home/thing-4.png' },
    { name: 'Hidden Speakeasies', image: '/assets/home/thing-5.png' },
    { name: 'Rooftop Bars', image: '/assets/home/thing-1.png' },
  ],
};

export default function TopThingsToDoSection() {
  const [activeCategory, setActiveCategory] = useState('explore');

  const things = THINGS_BY_CATEGORY[activeCategory] || THINGS_BY_CATEGORY['explore'];

  return (
    <section className="py-20 container-main">
      <h2 className="mb-12 text-neutral-900">Top Things to Do in Barcelona</h2>

      <div className="flex flex-wrap gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActiveCategory(cat.value)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all",
              activeCategory === cat.value
                ? 'bg-neutral-900 text-white shadow-lg scale-105'
                : 'bg-white border border-neutral-200 text-neutral-900 hover:border-neutral-900'
            )}
          >
            <Image
              src={cat.icon}
              alt=""
              width={20}
              height={20}
              className={cn(
                activeCategory === cat.value && cat.value !== 'explore' ? 'invert' :
                activeCategory !== cat.value && cat.value === 'explore' ? 'brightness-0 grayscale' : ''
              )}
            />
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {things.map((thing, idx) => (
          <div key={`${activeCategory}-${idx}`} className="flex flex-col gap-3 group cursor-pointer animate-in fade-in zoom-in-95 duration-300">
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
