"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type Review = {
  id: string;
  hotelName: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  image: string;
};

const MY_REVIEWS: Review[] = [
  {
    id: "1",
    hotelName: "The Ritz-Carlton",
    location: "Paris, France",
    rating: 5,
    date: "15 Oct 2023",
    comment: "Absolutely stunning experience! The service was impeccable and the room had an incredible view of the Eiffel Tower. Highly recommend for anyone seeking luxury.",
    image: "https://images.unsplash.com/photo-1542314831-068c811dba56?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "2",
    hotelName: "Marina Bay Sands",
    location: "Singapore",
    rating: 4,
    date: "22 Aug 2023",
    comment: "Amazing infinity pool and great location. The room was spacious, though the check-in process took a bit longer than expected.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ReviewActive() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">My Reviews</h1>
        <p className="text-muted-foreground text-sm">
          Your shared experiences and ratings for the places you've visited.
        </p>
      </div>

      <div className="space-y-6">
        {MY_REVIEWS.map((review) => (
          <div
            key={review.id}
            className="flex flex-col md:flex-row gap-6 p-6 border rounded-2xl hover:bg-accent/30 transition-colors"
          >
            {/* Hotel Image */}
            <div className="w-full md:w-40 h-32 shrink-0 overflow-hidden rounded-xl">
              <img
                src={review.image}
                alt={review.hotelName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Review Content */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{review.hotelName}</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < review.rating ? "currentColor" : "none"}
                          className={cn(i < review.rating ? "text-yellow-500" : "text-muted-foreground")}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs">
                    <MapPin size={12} />
                    <span>{review.location}</span>
                    <span className="mx-2">•</span>
                    <span>{review.date}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  Edit Review
                </Button>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                "{review.comment}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
