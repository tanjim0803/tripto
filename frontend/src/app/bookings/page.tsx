"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import BookingFilters from "@/components/bookings/BookingFilters";
import BookingList from "@/components/bookings/BookingList";
import BookingsEmptyState from "@/components/bookings/BookingsEmptyState";

export default function BookingsPage() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">My Bookings</h1>
          <p className="text-muted-foreground text-lg">
            Manage your upcoming trips and revisit your favorite getaways.
          </p>
        </div>

        <BookingFilters activeFilter={filter} setFilter={setFilter} />

        <div className="mt-4">
          {filter === "empty" ? (
            <BookingsEmptyState />
          ) : (
            <BookingList filter={filter} />
          )}
        </div>
      </div>
    </div>
  );
}
