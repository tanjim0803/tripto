import Image from "next/image";
import { Button } from "../ui/button";

export default function TrendingDestinations() {
  return (
    <section className="container-main">
      <div className="flex items-center justify-between mb-8">
        <h2>Trending Destinations</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            All Stays
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            Beachfront
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            Mountain
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            name: "Phuket, Thailand",
            price: "$120/night",
            img: "/placeholder.svg",
          },
          {
            name: "Santorini, Greece",
            price: "$250/night",
            img: "/placeholder.svg",
          },
          {
            name: "Bali, Indonesia",
            price: "$90/night",
            img: "/placeholder.svg",
          },
          {
            name: "Kyoto, Japan",
            price: "$180/night",
            img: "/placeholder.svg",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer"
          >
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="text-white text-lg font-semibold">{item.name}</h4>
              <p className="text-sm text-neutral-300">From {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
