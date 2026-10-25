"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function BookingFilters({ activeFilter, setFilter }: { activeFilter: string, setFilter: (f: string) => void }) {
  const filters = [
    { id: "all", label: "All Bookings" },
    { id: "upcoming", label: "Upcoming" },
    { id: "completed", label: "Completed" },
    { id: "canceled", label: "Canceled" },
    { id: "empty", label: "Empty State" }, // Added for demonstration
  ];

  return (
    <div className="flex items-center gap-2 p-1 bg-neutral-100 rounded-xl w-fit">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => setFilter(f.id)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-lg transition-all",
            activeFilter === f.id
              ? "bg-white text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
