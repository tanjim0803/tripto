import React from "react";
import { Calendar, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BookingWidget() {
  return (
    <div className="sticky top-24 p-6 border rounded-3xl bg-white shadow-sm flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 p-3 border rounded-xl">
          <Calendar size={18} className="text-slate-400" />
          <div className="flex-1">
            <div className="text-xs text-slate-400">Check-in</div>
            <div className="text-sm font-medium">06/10/2023</div>
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </div>

        <div className="flex items-center gap-3 p-3 border rounded-xl">
          <Calendar size={18} className="text-slate-400" />
          <div className="flex-1">
            <div className="text-xs text-slate-400">Check-out</div>
            <div className="text-sm font-medium">08/10/2023</div>
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </div>

        <div className="flex items-center gap-3 p-3 border rounded-xl">
          <User size={18} className="text-slate-400" />
          <div className="flex-1">
            <div className="text-xs text-slate-400">Rooms and Guests</div>
            <div className="text-sm font-medium">1 Room, 2 Adults</div>
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </div>
      </div>

      <div className="flex justify-between items-end py-2">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-slate-400">Prices: From</span>
          <span className="text-2xl font-bold text-slate-900">$500</span>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
          Show Rooms
        </Button>
      </div>
    </div>
  );
}
