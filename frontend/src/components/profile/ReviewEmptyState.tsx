"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export default function ReviewEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20 text-center space-y-8">
      {/* Illustration Area */}
      <div className="relative w-64 h-48 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Message icon representing empty reviews */}
          <div className="text-muted-foreground/20">
            <MessageSquare
              size={120}
              strokeWidth={1}
              className="animate-pulse"
            />
          </div>

          {/* Decorative elements to match the aesthetic of previous empty states */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/10 rounded-full blur-xl" />
          <div className="absolute bottom-8 -left-8 w-12 h-12 bg-primary/10 rounded-full blur-xl" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">No reviews yet</h2>
        <p className="text-muted-foreground max-w-xs mx-auto">
          Your feedback helps others discover great places. Share your experience with the world!
        </p>

        <Button className="rounded-full px-8 py-6 gap-2 text-base font-medium bg-primary-500 text-white hover:bg-primary-600 transition-all">
          Write a Review
        </Button>
      </div>
    </div>
  );
}
