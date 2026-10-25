import React from 'react';
import HeroSection from '../components/home/HeroSection';
import WhyTriptoSection from '../components/home/WhyTriptoSection';
import TrendingDestinations from '../components/home/TrendingDestinations';
import DealsSection from '../components/home/DealsSection';
import TravelMoreSpendLessSection from '../components/home/TravelMoreSpendLessSection';
import TopSightsSection from '../components/home/TopSightsSection';
import TopThingsToDoSection from '../components/home/TopThingsToDoSection';
import ExploreMotionSection from '../components/home/ExploreMotionSection';
import HomesGuestsLoveSection from '../components/home/HomesGuestsLoveSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WhyTriptoSection />
      <TrendingDestinations />
      <DealsSection />
      <TravelMoreSpendLessSection />
      <TopSightsSection />
      <TopThingsToDoSection />
      <ExploreMotionSection />
      <HomesGuestsLoveSection />
      <TestimonialsSection />
    </main>
  );
}
