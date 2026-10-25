import React from "react";
import { Star, Heart, Share2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function HotelHero({
  hotel = {
    name: "Hotel Arts Barcelona",
    rating: 5,
    location: "Barcelona, Spain"
  }
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-slate-900">{hotel.name}</h1>
            <div className="flex text-yellow-400">
              {[...Array(hotel.rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-current" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1 text-slate-500 mt-2">
            <MapPin size={16} />
            <span>{hotel.location}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <Heart size={20} />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Share2 size={20} />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[500px]">
        <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
            alt="Main"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80"
            alt="View 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542314831-068bed575257?auto=format&fit=crop&w=400&q=80"
            alt="View 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1571896349842-9c941a316429?auto=format&fit=crop&w=400&q=80"
            alt="View 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f6?auto=format&fit=crop&w=400&q=80"
            alt="View 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-transparent border-b w-full justify-start rounded-none h-auto p-0 gap-6">
          {["Overview", "Amenities", "Location", "Rooms", "Reviews"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab.toLowerCase()}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 bg-transparent px-0 py-3"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
