import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export default function DealsForTheWeekend() {
  return (
    <section className="container-main">
      <div className="flex items-center justify-between mb-8">
        <h2>Deals for the Weekend</h2>
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
          {
            title: "Peak Serenity Villa",
            loc: "Bali, Indonesia",
            price: "$140",
            oldPrice: "$200",
          },
          {
            title: "Tropical Bungalow",
            loc: "Phuket, Thailand",
            price: "$110",
            oldPrice: "$160",
          },
          {
            title: "Sunset Cliff Resort",
            loc: "Santorini, Greece",
            price: "$320",
            oldPrice: "$400",
          },
          {
            title: "Private Island Resort",
            loc: "Maldives",
            price: "$450",
            oldPrice: "$600",
          },
        ].map((deal, idx) => (
          <Card
            key={idx}
            className="overflow-hidden border border-neutral-100 rounded-2xl shadow-sm"
          >
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg"
                alt={deal.title}
                fill
                className="object-cover"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white text-neutral-700">
                <Heart className="w-4 h-4" />
              </button>
            </div>
            <CardContent className="p-4">
              <Badge className="bg-success-100 text-success-800 hover:bg-success-100 mb-2 font-medium">
                15% OFF
              </Badge>
              <h5 className="text-base font-semibold">{deal.title}</h5>
              <p className="body-small text-neutral-400 mt-1">{deal.loc}</p>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-lg font-bold text-primary-500">
                  {deal.price}
                </span>
                <span className="text-sm text-neutral-400 line-through">
                  {deal.oldPrice}
                </span>
                <span className="text-xs text-neutral-500">/ night</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
