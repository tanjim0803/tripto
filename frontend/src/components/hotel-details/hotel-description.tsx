import React from "react";
import { Utensils, Beer, Dumbbell, Waves, Cigarette, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HotelDescription() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-slate-900">Description</h2>
        <div className="space-y-3 text-slate-600">
          <p>
            <span className="font-semibold text-slate-900">Hotel size </span>{" "}
            200 rooms, Average 4 stars
          </p>
          <p>
            <span className="font-semibold text-slate-900">
              Barcelona gorgeous hotel
            </span>{" "}
            provides a luxury accommodation that offers a world-class
            experience.
          </p>
          <p>
            Situated along the waterfront, it features stunning sea views and
            state-of-the-art facilities. The hotel is renowned for its exquisite
            dining, rejuvenating spa, and unparalleled service.
          </p>
        </div>
        <Button
          variant="ghost"
          className="text-blue-600 p-0 h-auto hover:bg-transparent w-fit"
        >
          Show More
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-slate-900">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AmenityItem icon={<Utensils size={18} />} label="Restaurant" />
          <AmenityItem icon={<Beer size={18} />} label="Bar" />
          <AmenityItem icon={<Dumbbell size={18} />} label="Gym" />
          <AmenityItem icon={<Waves size={18} />} label="Pool" />
          <AmenityItem icon={<Cigarette size={18} />} label="Smoking Allowed" />
          <AmenityItem icon={<Wifi size={18} />} label="Tiptop Wifi" />
        </div>
        <Button
          variant="ghost"
          className="text-blue-600 p-0 h-auto hover:bg-transparent w-fit"
        >
          Show All 10 Amenities
        </Button>
      </div>
    </div>
  );
}

function AmenityItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 text-slate-600">
      <div className="p-2 bg-slate-100 rounded-lg text-slate-700">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
