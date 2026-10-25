import React from 'react';

const DISCOUNTS = [
  {
    title: '10% discounts on stays',
    description: 'Enjoy discounts at participating properties worldwide.',
  },
  {
    title: 'Travel of season',
    description: 'Avoid peak times and enjoy lower and fewer crowds.',
  },
  {
    title: 'Exclusive deals',
    description: 'Enjoy discounts at participating properties worldwide.',
  },
  {
    title: 'Weekend Special',
    description: 'Enjoy 12% off weekend stays.',
  },
  {
    title: 'Long Stay Discount',
    description: 'Stay 7 nights or more and get 25% off.',
  },
  {
    title: 'App-Exclusive Deal',
    description: 'Save up to 20% when you book through the app.',
  },
  {
    title: 'Earn points, get rewards',
    description: 'Join our loyalty program and save on every trip.',
  },
  {
    title: 'Last-Minute Escape',
    description: 'Special prices for bookings made within 48 hours.',
  },
];

export default function TravelMoreSpendLessSection() {
  return (
    <section className="py-20 container-main">
      <h2 className="mb-12 text-neutral-900">Travel more, spend less</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DISCOUNTS.map((discount, idx) => (
          <div
            key={idx}
            className="p-6 border border-primary rounded-2xl bg-white hover:bg-primary-50 transition-colors group cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary transition-colors">
              {discount.title}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {discount.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
