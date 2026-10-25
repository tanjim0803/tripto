import { BookOpen } from "lucide-react";

export default function AboutUsMission() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative aspect-square rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503220317375-aaad6e58677c?q=80&w=2070&auto=format&fit=crop"
          alt="Mission"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-6 right-6 bg-primary text-white p-4 rounded-2xl shadow-xl">
          <BookOpen size={32} />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
          Our Mission
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
          Empowering Every Traveler to Find Their Perfect Escape
        </h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          We believe that travel should be seamless, inspiring, and personal. Our goal is to
          bridge the gap between luxury and accessibility, providing curated experiences
          that resonate with the unique desires of every traveler.
        </p>
        <p className="text-lg text-neutral-600 leading-relaxed">
          From hidden gems in the heart of Europe to serene retreats in Asia, Tripto
          combines cutting-edge technology with a human touch to ensure your next trip
          is not just a vacation, but a lifelong memory.
        </p>
      </div>
    </section>
  );
}
