import React from 'react';
import Image from 'next/image';

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
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-main">
        <h2 className="mb-16 text-center text-neutral-900">Let's see what people think of Tripto</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <Image src={t.image} alt={t.name} width={48} height={48} className="rounded-full" />
                <div>
                  <p className="font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-neutral-400 text-xs">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/assets/home/star-icon.svg"
                    alt="star"
                    width={16}
                    height={16}
                    className={i < t.rating ? 'opacity-100' : 'opacity-30'}
                  />
                ))}
              </div>
              <p className="text-neutral-600 italic leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
