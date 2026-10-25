"use client";

import React, { useState } from "react";
import ActiveReservations from "@/components/profile/ActiveReservations";
import TripsEmptyState from "@/components/profile/TripsEmptyState";
import { cn } from "@/lib/utils";

export default function TripsPage() {
  const [tripsFilter, setTripsFilter] = useState("active");

  return (
    <>
      {/* Trips Sub-navigation (simulated filter) */}
      <div className="flex items-center gap-4 mb-8 border-b pb-2">
        {["All", "Active", "Completed", "Canceled"].map((filter) => (
          <button
            key={filter}
            onClick={() => setTripsFilter(filter.toLowerCase())}
            className={cn(
              "text-sm px-3 py-1 transition-colors",
              tripsFilter === filter.toLowerCase()
                ? "text-primary font-semibold border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {tripsFilter === "active" ? <ActiveReservations /> : <TripsEmptyState />}
    </>
  );
}
