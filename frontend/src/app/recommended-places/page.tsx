"use client";

import React from "react";
import { RecommendedPlaceCard } from "@/components/recommended-places/RecommendedPlaceCard";
import { Badge } from "@/components/ui/badge";

const RECOMMENDED_PLACES = [
  {
    name: "Santorini Blue Domes",
    location: "Oia, Greece",
    rating: 4.9,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1570077187006-a76775599721?q=80&w=800&auto=format&fit=crop",
    category: "Luxury" as const,
    description: "Experience the breathtaking sunsets and iconic white-washed buildings of Santorini.",
    priceRange: "$400/night",
    tags: ["Romantic", "Scenic", "Luxury"],
  },
  {
    name: "Kyoto Bamboo Forest",
    location: "Arashiyama, Japan",
    rating: 4.8,
    reviews: 3100,
    image: "https://images.unsplash.com/photo-1493976040615-665fa6f135ca?q=80&w=800&auto=format&fit=crop",
    category: "Nature" as const,
    description: "Walk through the towering green stalks of the Sagano Bamboo Forest for a peaceful escape.",
    priceRange: "Free Entry",
    tags: ["Peaceful", "Nature", "Culture"],
  },
  {
    name: "Amalfi Coast Villas",
    location: "Positano, Italy",
    rating: 4.7,
    reviews: 850,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482679?q=80&w=800&auto=format&fit=crop",
    category: "Culture" as const,
    description: "Cliffside luxury overlooking the Mediterranean Sea with authentic Italian charm.",
    priceRange: "$600/night",
    tags: ["Coastal", "Gourmet", "Luxury"],
  },
  {
    name: "Swiss Alps Lodge",
    location: "Zermatt, Switzerland",
    rating: 4.9,
    reviews: 1100,
    image: "https://images.unsplash.com/photo-1502784444187-3597ff50-800&auto=format&fit=crop",
    category: "Adventure" as const,
    description: "Cozy chalets and world-class skiing right at the foot of the Matterhorn.",
    priceRange: "$350/night",
    tags: ["Skiing", "Winter", "Mountain"],
  },
  {
    name: "Bali Tropical Retreat",
    location: "Ubud, Indonesia",
    rating: 4.6,
    reviews: 2200,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    category: "Nature" as const,
    description: "Find inner peace in the heart of Bali's jungles with luxury villas and yoga retreats.",
    priceRange: "$200/night",
    tags: ["Wellness", "Jungle", "Spa"],
  },
  {
    name: "New York City Lights",
    location: "Manhattan, USA",
    rating: 4.5,
    reviews: 4500,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e623a7b?q=80&w=800&auto=format&fit=crop",
    category: "City" as const,
    description: "The city that never sleeps. Explore Broadway, Central Park, and world-class dining.",
    priceRange: "$500/night",
    tags: ["Urban", "Shopping", "Entertainment"],
  },
];

export default function RecommendedPlacesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="text-center space-y-4">
        <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1 rounded-full">
          Handpicked Destinations
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Explore the World's <span className="text-primary">Best Places</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Our curated list of the most extraordinary destinations, from hidden gems to world-famous landmarks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RECOMMENDED_PLACES.map((place, index) => (
          <RecommendedPlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
}
