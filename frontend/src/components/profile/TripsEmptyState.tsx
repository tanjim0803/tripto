"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function TripsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20 text-center space-y-8">
      {/* Illustration Area */}
      <div className="relative w-64 h-48 flex items-center justify-center">
        <div className="relative flex items-center gap-12">
          {/* Heart Icon */}
          <div className="text-muted-foreground/40">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.51 4.05 3 5.5l7 7Z" />
            </svg>
          </div>

          {/* Dotted Path */}
          <div className="absolute left-12 right-12 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-muted-foreground/30 w-full" />

          {/* Suitcase Icon */}
          <div className="text-muted-foreground/40">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="16" height="12" x="4" y="8" rx="2" />
              <path d="M9 8V5a3 3 0 0 1 6 0v3" />
              <path d="M8 12h8" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <Button className="rounded-full px-6 py-6 gap-2 text-base font-medium border-2 border-primary-500 hover:bg-primary-500 hover:text-white transition-all">
          <Search size={20} />
          Start searching
        </Button>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold">You haven't booked any stays yet.</h2>
          <p className="text-muted-foreground">
            Discover and book your next getaway now!
          </p>
        </div>
      </div>
    </div>
  );
}
