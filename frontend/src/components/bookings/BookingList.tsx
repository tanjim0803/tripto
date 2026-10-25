import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar, User, MapPin } from "lucide-react";

type Booking = {
  id: string;
  hotelName: string;
  location: string;
  image: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  status: "Confirmed" | "Pending" | "Canceled";
  type: "upcoming" | "completed" | "canceled";
  price: string;
};

const BOOKINGS: Booking[] = [
  {
    id: "BKN-9921",
    hotelName: "Azure Bay Resort",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
    checkIn: "15 Oct 2026",
    checkOut: "22 Oct 2026",
    guests: "2 Adults",
    status: "Confirmed",
    type: "upcoming",
    price: "$2,400",
  },
  {
    id: "BKN-8812",
    hotelName: "Alpine Lodge & Spa",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1502784444187-3229cf76e96b?q=80&w=2070&auto=format&fit=crop",
    checkIn: "10 Jan 2026",
    checkOut: "17 Jan 2026",
    guests: "2 Adults, 1 Child",
    status: "Confirmed",
    type: "completed",
    price: "$1,850",
  },
  {
    id: "BKN-7734",
    hotelName: "Tokyo Urban Suite",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1503899036084-c55597916a30?q=80&w=2070&auto=format&fit=crop",
    checkIn: "05 May 2026",
    checkOut: "12 May 2026",
    guests: "1 Adult",
    status: "Canceled",
    type: "canceled",
    price: "$1,200",
  },
];

export default function BookingList({ filter }: { filter: string }) {
  const filteredBookings = filter === "all"
    ? BOOKINGS
    : BOOKINGS.filter(b => b.type === filter);

  if (filteredBookings.length === 0) {
    return <div className="text-center py-20 text-muted-foreground">No bookings found for this filter.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {filteredBookings.map((booking) => (
        <div
          key={booking.id}
          className="group relative flex flex-col md:flex-row bg-white border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <div className="relative w-full md:w-72 h-48 md:h-auto overflow-hidden">
            <Image
              src={booking.image}
              alt={booking.hotelName}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    className={cn(
                      "text-[10px] px-2 py-0 h-5 font-medium",
                      booking.status === "Confirmed" ? "bg-green-100 text-green-700 hover:bg-green-100" :
                      booking.status === "Pending" ? "bg-orange-100 text-orange-700 hover:bg-orange-100" :
                      "bg-red-100 text-red-700 hover:bg-red-100"
                    )}
                  >
                    {booking.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-medium">#{booking.id}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{booking.hotelName}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin size={14} /> {booking.location}
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Total Price</p>
                <p className="text-2xl font-bold text-primary">{booking.price}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t">
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <div className="p-2 bg-neutral-100 rounded-lg">
                  <Calendar size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-muted-foreground font-bold">Dates</p>
                  <p className="font-medium">{booking.checkIn} — {booking.checkOut}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-600">
                <div className="p-2 bg-neutral-100 rounded-lg">
                  <User size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-muted-foreground font-bold">Guests</p>
                  <p className="font-medium">{booking.guests}</p>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <Link href={`/profile/trips/${booking.id}`}>
                  <Button variant="outline" className="rounded-full px-6 hover:bg-primary hover:text-white transition-all">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
