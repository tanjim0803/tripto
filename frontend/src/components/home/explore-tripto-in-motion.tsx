import { Play } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function ExploreTriptoInMotion() {
  return (
    <section className="container-main">
      <div className="mb-8">
        <h2>Explore Tripto in Motion</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative h-[420px] rounded-3xl overflow-hidden bg-neutral-900 text-white flex items-end p-8">
          <Image
            src="/placeholder.svg"
            alt="Video banner"
            fill
            className="object-cover opacity-70"
          />
          <div className="relative z-10 max-w-md">
            <h2 className="text-white mb-4">Step Into a World of Luxury</h2>
            <p className="text-sm text-neutral-200 mb-6">
              Immerse yourself in captivating visual tours from our most
              exclusive locations.
            </p>
            <Button className="bg-primary-500 hover:bg-primary-600 rounded-full">
              Explore All Videos
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="relative h-32 rounded-2xl overflow-hidden group cursor-pointer flex items-center justify-center"
            >
              <Image
                src="/placeholder.svg"
                alt="Video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-primary-500 z-10">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
