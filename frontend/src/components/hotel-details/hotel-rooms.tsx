import React from "react";
import { Star, Wifi, Coffee, Wind, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RoomProps {
  name: string;
  stars: number;
  capacity: string;
  features: string[];
  size: string;
  price: string;
  totalPrice: string;
  available: boolean;
}

const MOCK_ROOMS: RoomProps[] = [
  {
    name: "Superior Twin/Double Room",
    stars: 5,
    capacity: "2 Single bed • 2 Persons",
    features: ["Breakfast", "Free Wifi", "Sea View"],
    size: "30 m²",
    price: "$290",
    totalPrice: "$1,450",
    available: true,
  },
  {
    name: "Suite",
    stars: 5,
    capacity: "1 Double bed • 4 Persons",
    features: ["Breakfast", "Free Wifi", "City View"],
    size: "50 m²",
    price: "$460",
    totalPrice: "$2,300",
    available: true,
  },
  {
    name: "Spacious Room",
    stars: 5,
    capacity: "1 King bed • 3 Persons",
    features: ["Breakfast", "Free Wifi", "City View"],
    size: "40 m²",
    price: "$380",
    totalPrice: "$1,900",
    available: true,
  },
  {
    name: "Double Double Room",
    stars: 5,
    capacity: "2 Double bed • 3 Persons",
    features: ["Breakfast", "Free Wifi", "Sea View"],
    size: "30 m²",
    price: "$320",
    totalPrice: "$1,600",
    available: false,
  },
];

export function HotelRooms() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 mb-2">
        <h2 className="text-2xl font-bold text-slate-900">Rooms</h2>
        <div className="flex bg-slate-100 p-1 rounded-lg">
          {["All Rooms", "1 Bed", "2 Beds", "3 Beds"].map((btn, i) => (
            <Button
              key={btn}
              variant={i === 0 ? "default" : "ghost"}
              className={`text-xs h-7 px-3 ${i === 0 ? "bg-blue-600" : ""}`}
            >
              {btn}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {MOCK_ROOMS.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    </div>
  );
}

function RoomCard({ room }: { room: RoomProps }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 border rounded-2xl hover:shadow-md transition-shadow bg-white">
      <div className="w-full md:w-64 h-40 shrink-0 rounded-xl overflow-hidden">
        <img
          src={`https://images.unsplash.com/photo-1590490360182-cda5c7383333?auto=format&fit=crop&w=400&q=80&sig=${Math.random()}`}
          alt={room.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-900">{room.name}</h3>
              <Badge variant="outline" className="text-slate-500 font-normal">Standard</Badge>
            </div>
            <div className="flex items-center gap-1 text-sm text-slate-500 mt-1">
              <span className="font-medium">{room.capacity}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <span className="text-slate-900">5.0</span>
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Coffee size={14} /> {room.features[0]}
          </div>
          <div className="flex items-center gap-1">
            <Wifi size={14} /> {room.features[1]}
          </div>
          <div className="flex items-center gap-1">
            <Wind size={14} /> {room.features[2]}
          </div>
          <div className="flex items-center gap-1">
            <Maximize size={14} /> {room.size}
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Button variant="link" className="p-0 h-auto text-blue-600">More details</Button>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end md:w-48 border-l pl-6">
        <div className="text-right">
          <div className="text-2xl font-bold text-slate-900">{room.price}</div>
          <div className="text-xs text-slate-400">Total Price: {room.totalPrice}</div>
        </div>
        <Button
          disabled={!room.available}
          className={`w-full ${room.available ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-200 text-slate-400"}`}
        >
          {room.available ? "Reserve now" : "Unavailable"}
        </Button>
      </div>
    </div>
  );
}
