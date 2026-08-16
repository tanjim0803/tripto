import DealsForTheWeekend from "@/components/home/deals-for-the-weekend";
import ExploreTriptoInMotion from "@/components/home/explore-tripto-in-motion";
import Hero from "@/components/home/hero";
import HomesGuestsLove from "@/components/home/homes-guests-love";
import Testimonial from "@/components/home/testimonial";
import TopSightsToSee from "@/components/home/top-sights-to-see";
import TopThingsToDoInBarcelona from "@/components/home/top-things-to-do-in-barcelona";
import TravelMoreSpendLess from "@/components/home/travel-more-spend-less";
import TrendingDestinations from "@/components/home/trending-destinations";
import WhyTravellersTrustTripto from "@/components/home/why-travellers-trust-tripto";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <div className="container-main">
        <Hero />
        <WhyTravellersTrustTripto />
        <TrendingDestinations />
        <DealsForTheWeekend />
        <TravelMoreSpendLess />
        <TopSightsToSee />
        <TopThingsToDoInBarcelona />
        <ExploreTriptoInMotion />
        <HomesGuestsLove />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}
