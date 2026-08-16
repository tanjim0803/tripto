import {
  Building,
  Calendar,
  Car,
  MapPin,
  Palmtree,
  Plane,
  Search,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[650px] flex items-center justify-center bg-neutral-900 text-white">
      <Image
        src="/placeholder.svg"
        alt="Hero Background"
        fill
        priority
        className="object-cover opacity-60"
      />
      <div className="relative z-10 text-center max-w-3xl px-5">
        <h1 className="mb-4">Your Trip Starts Here</h1>
        <p className="body-large text-neutral-200 mb-8">
          Find unique stays, secret beach villas, and more.
        </p>
      </div>

      {/* Search Bar Overlay */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-5 z-20">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 text-neutral-900 border border-neutral-100">
          {/* Tabs */}
          <div className="flex gap-4 border-b border-neutral-200 pb-3 mb-4 overflow-x-auto">
            <button className="flex items-center gap-2 text-primary-500 font-semibold border-b-2 border-primary-500 pb-1">
              <Building className="w-4 h-4" /> Stays
            </button>
            <button className="flex items-center gap-2 text-neutral-500 font-medium pb-1 hover:text-neutral-800">
              <Plane className="w-4 h-4" /> Flights
            </button>
            <button className="flex items-center gap-2 text-neutral-500 font-medium pb-1 hover:text-neutral-800">
              <Car className="w-4 h-4" /> Car Rental
            </button>
            <button className="flex items-center gap-2 text-neutral-500 font-medium pb-1 hover:text-neutral-800">
              <Palmtree className="w-4 h-4" /> Attractions
            </button>
          </div>

          {/* Input Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <div className="flex flex-col border-r border-neutral-200 pr-2">
              <span className="text-xs text-neutral-400 font-medium">
                Location
              </span>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4 text-neutral-400" />
                <Input
                  type="text"
                  placeholder="Where are you going?"
                  className="border-none p-0 focus-visible:ring-0 text-sm font-medium"
                />
              </div>
            </div>

            <div className="flex flex-col border-r border-neutral-200 pr-2">
              <span className="text-xs text-neutral-400 font-medium">
                Check-in / Check-out
              </span>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4 text-neutral-400" />
                <span className="text-sm font-medium">Add dates</span>
              </div>
            </div>

            <div className="flex flex-col border-r border-neutral-200 pr-2">
              <span className="text-xs text-neutral-400 font-medium">
                Guests
              </span>
              <div className="flex items-center gap-2 mt-1">
                <Users className="w-4 h-4 text-neutral-400" />
                <span className="text-sm font-medium">
                  2 Adults, 0 Children
                </span>
              </div>
            </div>

            <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white h-12 rounded-xl flex items-center justify-center gap-2">
              <Search className="w-5 h-5" /> Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
