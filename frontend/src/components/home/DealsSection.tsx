import React from 'react';
import Image from 'next/image';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const DEALS = [
  {
    title: 'Seaside Serenity Villa',
    location: 'Amalfi Coast, Italy',
    rating: '4.0',
    reviewCount: '160 reviews',
    reviewText: 'Very Good',
    oldPrice: '250',
    newPrice: '175',
    image: '/assets/home/deal-1.png',
    badge: 'Getaway Deal',
  },
  {
    title: 'Tropical Bungalow',
    location: 'Phuket, Thailand',
    rating: '3.8',
    reviewCount: '210 reviews',
    reviewText: 'Good',
    oldPrice: '210',
    newPrice: '160',
    image: '/assets/home/deal-2.png',
    badge: 'Getaway Deal',
  },
  {
    title: 'Santorini Sunset Suites',
    location: 'Santorini, Greece',
    rating: '4.9',
    reviewCount: '185 reviews',
    reviewText: 'Very Good',
    oldPrice: '300',
    newPrice: '255',
    image: '/assets/home/deal-3.png',
    badge: 'Getaway Deal',
  },
  {
    title: 'Marbella Resort',
    location: 'Marbella, Spain',
    rating: '4.6',
    reviewCount: '142 reviews',
    reviewText: 'Very Good',
    oldPrice: '280',
    newPrice: '190',
    image: '/assets/home/deal-4.png',
    badge: 'Getaway Deal',
  },
];

export default function DealsSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-main">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-neutral-900">Deals for the Weekend</h2>
          <div className="flex gap-3">
            <button className="p-2 rounded-full border border-neutral-200 hover:bg-white transition-colors bg-white">
              <ChevronLeft className="w-6 h-6 text-neutral-600" />
            </button>
            <button className="p-2 rounded-full border border-neutral-200 hover:bg-white transition-colors bg-white">
              <ChevronRight className="w-6 h-6 text-neutral-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEALS.map((deal, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-neutral-100 overflow-hidden group transition-all hover:shadow-md">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={deal.image}
                  alt={deal.title}
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
                    {deal.rating}
                  </div>
                  <span className="text-neutral-900 font-medium text-xs">{deal.reviewText}</span>
                  <span className="text-neutral-400 text-xs">{deal.reviewCount}</span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 truncate">{deal.title}</h3>
                  <p className="text-neutral-400 text-sm">{deal.location}</p>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="bg-success-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {deal.badge}
                  </div>
                  <div className="text-right">
                    <span className="text-neutral-400 line-through text-sm mr-2">${deal.oldPrice}</span>
                    <span className="text-neutral-900 font-bold text-lg">${deal.newPrice}</span>
                    <span className="text-neutral-400 text-xs ml-1">/night</span>
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
