import React from "react";
import { MapPin } from "lucide-react";

export function HotelLocation() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-slate-900">Location</h2>
      <div className="w-full h-[400px] rounded-2xl overflow-hidden relative bg-slate-200">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
          alt="Map"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg animate-bounce">
            <MapPin size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
