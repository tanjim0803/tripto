"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function WishListEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20 text-center space-y-8">
      {/* Illustration Area */}
      <div className="relative w-64 h-48 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Large Heart Icon with style from design */}
          <div className="text-muted-foreground/20">
            <Heart
              size={120}
              strokeWidth={1}
              className="animate-pulse"
            />
          </div>

          {/* Small floating heart elements to mimic the design's vibe */}
          <Heart size={24} className="absolute -top-4 -right-4 text-primary/30 rotate-12" />
          <Heart size={20} className="absolute bottom-8 -left-8 text-primary/20 -rotate-12" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Your wish list is empty</h2>
        <p className="text-muted-foreground max-w-xs mx-auto">
          Save your favorite hotels and destinations to plan your perfect trip later.
        </p>

        <Button className="rounded-full px-8 py-6 gap-2 text-base font-medium bg-primary-500 text-white hover:bg-primary-600 transition-all">
          Explore Destinations
        </Button>
      </div>
    </div>
  );
}
