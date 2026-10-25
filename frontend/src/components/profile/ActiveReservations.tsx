"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Reservation = {
  id: string;
  hotelName: string;
  image: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  status: "Confirmed" | "Pending" | "Canceled";
};

const RESERVATIONS: Reservation[] = [
  {
    id: "173826",
    hotelName: "Golden Tulip Hotel",
    image: "https://images.unsplash.com/photo-1566073773047-98828a118be2?q=80&w=2070&auto=format&fit=crop",
    checkIn: "12 Mar 2021",
    checkOut: "24 Mar 2025",
    guests: "4 Adults",
    status: "Confirmed",
  },
  {
    id: "173826", // Kept same as per design image
    hotelName: "Grand Seaside Hotel",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    checkIn: "12 Mar 2021",
    checkOut: "24 Mar 2025",
    guests: "4 Adults",
    status: "Pending",
  },
];

export default function ActiveReservations() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Active Reservations</h1>
        <p className="text-muted-foreground text-sm">View and manage your current bookings here.</p>
      </div>

      <div className="space-y-4">
        {RESERVATIONS.map((res, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-xl gap-6 hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-center gap-4 flex-1">
              <img
                src={res.image}
                alt={res.hotelName}
                className="size-20 rounded-lg object-cover"
              />
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-semibold">{res.hotelName}</span>
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-[10px] px-2 py-0 h-5 font-medium",
                      res.status === "Confirmed" ? "text-green-600 border-green-200 bg-green-50" :
                      res.status === "Pending" ? "text-orange-600 border-orange-200 bg-orange-50" :
                      "text-red-600 border-red-200 bg-red-50"
                    )}
                  >
                    {res.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">ID {res.id}</span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
                  <span><strong className="text-foreground">Check In:</strong> {res.checkIn}</span>
                  <span><strong className="text-foreground">Check out:</strong> {res.checkOut}</span>
                  <span><strong className="text-foreground">Guests:</strong> {res.guests}</span>
                </div>
              </div>
            </div>
            <Link href={`/profile/trips/${res.id}`}>
              <Button variant="link" className="text-primary p-0 h-auto font-medium text-sm">
                Check Details
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
