import React from "react";
import { CalendarX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BookingsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center space-y-6 bg-neutral-50 rounded-3xl border-2 border-dashed border-neutral-200">
      <div className="p-6 bg-white rounded-full shadow-sm">
        <CalendarX size={48} className="text-muted-foreground" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">No bookings yet</h2>
        <p className="text-muted-foreground max-w-sm mx-auto">
          It looks like you haven't booked any trips yet. Start exploring our curated stays and create unforgettable memories.
        </p>
      </div>
      <Link href="/search">
        <Button size="lg" className="rounded-full px-8">
          Explore Stays
        </Button>
      </Link>
    </div>
  );
}
