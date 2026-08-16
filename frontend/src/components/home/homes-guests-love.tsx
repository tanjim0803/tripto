import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export default function HomesGuestsLove() {
  return (
    <section className="container-main">
      <div className="flex items-center justify-between mb-8">
        <h2>Homes Guests Love</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Azure Horizon Resort", loc: "Greece", price: "$210" },
          { title: "Palm Breeze House", loc: "Costa Rica", price: "$180" },
          { title: "Casa Tranquila Villa", loc: "Mexico", price: "$290" },
          { title: "Villa San Martin Coast", loc: "Spain", price: "$340" },
        ].map((home, idx) => (
          <Card
            key={idx}
            className="overflow-hidden border border-neutral-100 rounded-2xl shadow-sm"
          >
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg"
                alt={home.title}
                fill
                className="object-cover"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white text-neutral-700">
                <Heart className="w-4 h-4" />
              </button>
            </div>
            <CardContent className="p-4">
              <h5 className="text-base font-semibold">{home.title}</h5>
              <p className="body-small text-neutral-400 mt-1">{home.loc}</p>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-xs text-neutral-500">Starting from</span>
                <span className="text-lg font-bold text-neutral-900">
                  {home.price}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
