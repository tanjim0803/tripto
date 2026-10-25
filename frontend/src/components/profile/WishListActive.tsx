"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Heart, Star, MapPin } from "lucide-react";
import Link from "next/link";

type WishListItem = {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  price: string;
};

const WISH_LIST_DATA: WishListItem[] = [
  {
    id: "1",
    name: "The Ritz-Carlton",
    location: "Paris, France",
    rating: 4.8,
    reviews: 1250,
    image: "https://images.unsplash.com/photo-1542314831-068c811dba56?q=80&w=2070&auto=format&fit=crop",
    price: "$850",
  },
  {
    id: "2",
    name: "Marina Bay Sands",
    location: "Singapore",
    rating: 4.7,
    reviews: 3100,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    price: "$620",
  },
  {
    id: "3",
    name: "Burj Al Arab",
    location: "Dubai, UAE",
    rating: 4.9,
    reviews: 840,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecf4055?q=80&w=2070&auto=format&fit=crop",
    price: "$1,200",
  },
];

export default function WishListActive() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">My Wish List</h1>
        <p className="text-muted-foreground text-sm">
          All your saved favorite hotels and destinations in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WISH_LIST_DATA.map((item) => (
          <div
            key={item.id}
            className="group relative bg-background border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-primary hover:bg-white transition-colors shadow-sm">
                <Heart size={18} fill="currentColor" />
              </button>
              <div className="absolute bottom-3 left-3">
                <Badge className="bg-white/90 text-foreground backdrop-blur-sm border-none">
                  <Star size={12} className="mr-1 fill-yellow-400 text-yellow-400" />
                  {item.rating} ({item.reviews})
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-semibold text-lg leading-tight">{item.name}</h3>
                <span className="font-bold text-primary">{item.price}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <MapPin size={14} />
                <span>{item.location}</span>
              </div>

              <Link href={`/hotel-detail/${item.id}`}>
                <Button className="w-full rounded-xl py-5">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
