"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const SEASONS = [
  { label: 'Spring Picks', icon: '/assets/home/spring-icon.svg', value: 'spring' },
  { label: 'Summer Hotspot', icon: '/assets/home/summer-icon.svg', value: 'summer' },
  { label: 'Autumn Escape', icon: '/assets/home/autumn-icon.svg', value: 'autumn' },
  { label: 'Winter Getaway', icon: '/assets/home/winter-icon.svg', value: 'winter' },
];

const DESTINATIONS_BY_SEASON: Record<string, any[]> = {
  spring: [
    {
      city: 'Paris, France',
      price: '128',
      description: 'Romantic escapes, art, and cafés.',
      image: '/assets/home/dest-paris.png',
    },
    {
      city: 'Kyoto, Japan',
      price: '190',
      description: 'Cherry blossoms and temples.',
      image: '/assets/home/dest-kyoto.png',
    },
    {
      city: 'Amsterdam, Netherlands',
      price: '145',
      description: 'Tulips, canals, and cycling.',
      image: '/assets/home/dest-paris.png', // Using existing as placeholder
    },
    {
      city: 'Washington DC, USA',
      price: '170',
      description: 'Monumental sights and spring blooms.',
      image: '/assets/home/dest-bali.png', // Using existing as placeholder
    },
  ],
  summer: [
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
      city: 'Ibiza, Spain',
      price: '310',
      description: 'World-class parties and crystal waters.',
      image: '/assets/home/dest-santorini.png', // Using existing as placeholder
    },
    {
      city: 'Maldives, Indian Ocean',
      price: '450',
      description: 'Overwater villas and white sand.',
      image: '/assets/home/dest-bali.png', // Using existing as placeholder
    },
  ],
  autumn: [
    {
      city: 'New York, USA',
      price: '210',
      description: 'Central Park colors and city lights.',
      image: '/assets/home/dest-paris.png',
    },
    {
      city: 'Seoul, South Korea',
      price: '160',
      description: 'Vibrant foliage and modern culture.',
      image: '/assets/home/dest-kyoto.png',
    },
    {
      city: 'Munich, Germany',
      price: '180',
      description: 'Oktoberfest and alpine views.',
      image: '/assets/home/dest-paris.png', // Using existing as placeholder
    },
    {
      city: 'Toronto, Canada',
      price: '150',
      description: 'Maple leaves and lakeside charm.',
      image: '/assets/home/dest-bali.png', // Using existing as placeholder
    },
  ],
  winter: [
    {
      city: 'Lapland, Finland',
      price: '300',
      description: 'Northern lights and snowy forests.',
      image: '/assets/home/dest-kyoto.png',
    },
    {
      city: 'Zermatt, Switzerland',
      price: '350',
      description: 'Skiing, luxury, and Matterhorn views.',
      image: '/assets/home/dest-santorini.png',
    },
    {
      city: 'Banff, Canada',
      price: '240',
      description: 'Frozen lakes and mountain peaks.',
      image: '/assets/home/dest-paris.png', // Using existing as placeholder
    },
    {
      city: 'Hokkaido, Japan',
      price: '210',
      description: 'Powder snow and hot springs.',
      image: '/assets/home/dest-kyoto.png',
    },
  ],
};

export default function TrendingDestinations() {
  const [activeSeason, setActiveSeason] = useState('spring');

  const destinations = DESTINATIONS_BY_SEASON[activeSeason] || DESTINATIONS_BY_SEASON['spring'];

  return (
    <section className="py-20 container-main">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-neutral-900">Trending Destinations</h2>

          <div className="flex flex-wrap gap-3">
            {SEASONS.map((season) => (
              <button
                key={season.label}
                onClick={() => setActiveSeason(season.value)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeSeason === season.value
                    ? 'bg-neutral-900 text-white shadow-md scale-105'
                    : 'bg-white border border-neutral-900 text-neutral-900 hover:bg-neutral-50'
                )}
              >
                <Image
                  src={season.icon}
                  alt=""
                  width={18}
                  height={18}
                  className={cn(
                    activeSeason === season.value && season.value !== 'spring' ? 'invert' :
                    activeSeason !== season.value && season.value === 'spring' ? 'brightness-0 grayscale' : ''
                  )}
                />
                {season.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500">
          {destinations.map((dest, idx) => (
            <div
              key={`${activeSeason}-${idx}`}
              className="group relative h-[520px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-500"
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
