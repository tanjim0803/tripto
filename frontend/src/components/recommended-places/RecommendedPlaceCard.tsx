"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, CheckCircle2, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecommendedPlaceProps {
  place: {
    name: string;
    location: string;
    rating: number;
    reviews: number;
    image: string;
    category: "Luxury" | "Nature" | "Adventure" | "Culture" | "City";
    description: string;
    priceRange: string;
    tags: string[];
  };
}

export function RecommendedPlaceCard({ place }: RecommendedPlaceProps) {
  return (
    <div className="group relative bg-background border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge className="bg-primary text-white px-3 py-1 rounded-full flex items-center gap-1">
            <Flame size={12} className="fill-current" />
            Trending
          </Badge>
          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm text-foreground border-none">
            {place.category}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-medium shadow-sm">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span>{place.rating} ({place.reviews})</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div className="space-y-1">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {place.name}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin size={14} />
            <span>{place.location}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2">
          {place.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {place.tags.map((tag, i) => (
            <span key={i} className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 mt-auto flex items-center justify-between border-t">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Starting from</span>
            <span className="text-lg font-bold text-primary">{place.priceRange}</span>
          </div>
          <Button className="rounded-xl px-6">
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
}
