import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SimilarHotels() {
  const hotels = [
    { name: "Hotel Arts Barcelona", location: "Barcelona, Spain", price: "$450", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80" },
    { name: "Majestic Hotel & Spa", location: "Barcelona, Spain", price: "$380", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80" },
    { name: "W Barcelona", location: "Barcelona, Spain", price: "$520", image: "https://images.unsplash.com/photo-1542314831-068bed575257?auto=format&fit=crop&w=400&q=80" },
    { name: "Regina Hotel Barcelona", location: "Barcelona, Spain", price: "$310", image: "https://images.unsplash.com/photo-1571896349842-9c941a316429?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="flex flex-col gap-6 mt-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Similar Hotels in Barcelona</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full"><ChevronLeft size={20} /></Button>
          <Button variant="outline" size="icon" className="rounded-full"><ChevronRight size={20} /></Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {hotels.map((hotel, i) => (
          <div key={i} className="flex flex-col gap-3 p-4 border rounded-2xl bg-white hover:shadow-md transition-shadow">
            <div className="h-40 rounded-xl overflow-hidden">
              <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">{hotel.name}</h3>
              <p className="text-xs text-slate-500">{hotel.location}</p>
            </div>
            <div className="mt-auto pt-2 border-t flex justify-between items-center">
              <span className="text-xs text-slate-400">Avg. price</span>
              <span className="font-bold text-slate-900">{hotel.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
