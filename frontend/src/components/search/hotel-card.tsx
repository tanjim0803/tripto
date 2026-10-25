import React from "react";
import {
  Star,
  MapPin,
  CheckCircle2,
  Filter,
  LayoutGrid,
  List,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface HotelCardProps {
  hotel: {
    name: string;
    location: string;
    distance: string;
    metroDistance: string;
    rating: string;
    ratingValue: number;
    image: string;
    type: "Luxury" | "Beach" | "Harborfront" | "Spa" | "Historic";
    roomType: string;
    roomView: string;
    roomSize: string;
    price: string;
    discount?: string;
    features: string[];
    badge?: string;
  };
}

export function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 border rounded-2xl hover:shadow-md transition-shadow bg-white">
      <div className="relative w-full md:w-72 h-48 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover"
        />
        {hotel.badge && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-blue-600 text-white">{hotel.badge}</Badge>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{hotel.name}</h3>
            <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
              <MapPin size={14} />
              <span className="flex items-center gap-1">
                {hotel.location} • {hotel.distance} • <span className="text-slate-400">Metro</span> {hotel.metroDistance}
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 justify-end text-sm font-medium">
              <span className="text-slate-900">{hotel.rating}</span>
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-slate-400 ml-1">{hotel.ratingValue}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 items-center text-sm">
          <span className="font-medium text-slate-700">{hotel.type} Hotel</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-600">{hotel.roomType} {hotel.roomView} {hotel.roomSize}</span>
        </div>

        <div className="flex flex-wrap gap-3">
          {hotel.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-1 text-xs text-slate-500">
              <CheckCircle2 size={12} className="text-green-500" />
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between items-end md:w-40 border-l pl-6">
        <div className="text-right">
          {hotel.discount && (
            <Badge variant="outline" className="text-green-600 border-green-600 mb-1">
              {hotel.discount} off
            </Badge>
          )}
          <div className="text-2xl font-bold text-slate-900">{hotel.price}</div>
          <div className="text-xs text-slate-400">5 nights, 2 adults</div>
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          View Deal
        </Button>
      </div>
    </div>
  );
}
