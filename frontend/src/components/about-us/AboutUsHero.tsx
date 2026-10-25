import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutUsHero() {
  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - Using a high-quality travel placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-6ca428a57352?q=80&w=2070&auto=format&fit=crop"
          alt="Travel background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Redefining the Way <br />
          <span className="text-primary">You Explore the World</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Tripto is more than just a booking platform. We are a community of explorers,
          dreamers, and wanderlust-driven souls dedicated to making luxury travel accessible.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105">
          Join Our Journey
        </Button>
      </div>
    </section>
  );
}
