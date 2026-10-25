import React from "react";
import { HotelHero } from "@/components/hotel-details/hotel-hero";
import { HotelDescription } from "@/components/hotel-details/hotel-description";
import { HotelLocation } from "@/components/hotel-details/hotel-location";
import { HotelRooms } from "@/components/hotel-details/hotel-rooms";
import { HotelReviews } from "@/components/hotel-details/hotel-reviews";
import { HotelPolicies } from "@/components/hotel-details/hotel-policies";
import { SimilarHotels } from "@/components/hotel-details/similar-hotels";
import { BookingWidget } from "@/components/hotel-details/booking-widget";

export default function HotelDetailsPage() {
  return (
    <div className="max-w-8xl mx-auto px-6 lg:px-20 py-10">
      <HotelHero />

      <div className="flex flex-col lg:flex-row gap-12 mt-12">
        <div className="flex-1 flex flex-col gap-16">
          <HotelDescription />
          <HotelLocation />
          <HotelRooms />
          <HotelReviews />
          <HotelPolicies />
          <SimilarHotels />
        </div>

        <aside className="lg:w-96">
          <BookingWidget />
        </aside>
      </div>
    </div>
  );
}
