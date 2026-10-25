import React from 'react';
import Image from 'next/image';

const TRUST_ITEMS = [
  {
    title: 'No hidden fees',
    description: 'Transparent pricing with no hidden fees.',
    icon: '/assets/home/dollar-icon.svg',
  },
  {
    title: 'Instant booking',
    description: 'Get confirmation right after you reserve.',
    icon: '/assets/home/shield-icon.svg',
  },
  {
    title: 'Flexibility',
    description: 'Flexible options with free cancellation on many listings.',
    icon: '/assets/home/edit-icon.svg',
  },
];

export default function WhyTriptoSection() {
  return (
    <section className="py-20 container-main flex flex-col items-center text-center">
      <h2 className="mb-16">Why Travellers Trust Tripto</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        {TRUST_ITEMS.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-6 group">
            <div className="w-24 h-24 bg-primary-50 rounded-3xl flex items-center justify-center group-hover:bg-primary-100 transition-colors relative">
              <Image
                src={item.icon}
                alt={item.title}
                width={56}
                height={56}
                className="relative z-10"
              />
            </div>
            <div className="flex flex-col gap-2 max-w-xs">
              <h3 className="text-2xl font-semibold text-neutral-900">{item.title}</h3>
              <p className="text-neutral-400 text-sm md:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
