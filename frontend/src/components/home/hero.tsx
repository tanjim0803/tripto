import {
  Building,
  Calendar,
  Hotel,
  Home,
  MapPin,
  Palmtree,
  Search,
  Tent,
  Wind,
  Utensils,
  DoorOpen,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const STAY_TYPES = [
  { label: "Hotel", icon: Hotel, value: "hotel" },
  { label: "House", icon: Home, value: "house" },
  { label: "Guest House", icon: DoorOpen, value: "guest-house" },
  { label: "Cabins", icon: Building, value: "cabins" },
  { label: "Glamping", icon: Tent, value: "glamping" },
  { label: "Doms", icon: Wind, value: "doms" },
];

export default function Hero() {
  const router = useRouter();
  const [activeStay, setActiveStay] = useState("hotel");
  const [destination, setDestination] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set("stay", activeStay);
    if (destination) params.set("q", destination);
    router.push(`/search?${params.toString()}`);
  };

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
        <h1 className="text-5xl font-bold mb-4">Your Trip Starts Here</h1>
        <p className="text-lg text-neutral-200 mb-8">
          Find unique stays, secret beach villas, and more.
        </p>
      </div>

      {/* Search Bar Overlay */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-6xl px-5 z-20">
        <div className="flex flex-col items-center gap-4">
          {/* Stay Type Selector */}
          <div className="bg-neutral-800/90 backdrop-blur-md p-1 rounded-full flex items-center gap-1 shadow-2xl border border-white/10">
            {STAY_TYPES.map((type) => (
              <button
                type="button"
                key={type.value}
                onClick={() => setActiveStay(type.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeStay === type.value
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <type.icon size={16} />
                {type.label}
              </button>
            ))}
          </div>

          {/* Main Search Card */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-6 md:p-8 text-neutral-900 border border-neutral-100 w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
              {/* Location */}
              <div className="md:col-span-4 flex flex-col px-6 border-r border-neutral-200 py-4">
                <span className="text-sm font-bold text-neutral-900 uppercase tracking-wide">Location</span>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="text-sm text-neutral-500 bg-transparent outline-none w-full placeholder:text-neutral-400"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>

              {/* Check In */}
              <div className="md:col-span-2 flex flex-col px-6 border-r border-neutral-200 py-4">
                <span className="text-sm font-bold text-neutral-900 uppercase tracking-wide">Check In</span>
                <div className="flex items-center gap-2 mt-1 text-neutral-500 cursor-pointer">
                  <Calendar className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span className="text-sm">Add Dates</span>
                </div>
              </div>

              {/* Check Out */}
              <div className="md:col-span-2 flex flex-col px-6 border-r border-neutral-200 py-4">
                <span className="text-sm font-bold text-neutral-900 uppercase tracking-wide">Check Out</span>
                <div className="flex items-center gap-2 mt-1 text-neutral-500 cursor-pointer">
                  <Calendar className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span className="text-sm">Add Dates</span>
                </div>
              </div>

              {/* Guests */}
              <div className="md:col-span-2 flex flex-col px-6 py-4">
                <span className="text-sm font-bold text-neutral-900 uppercase tracking-wide">Rooms and Guests</span>
                <div className="flex items-center gap-2 mt-1 text-neutral-500 cursor-pointer">
                  <span className="text-sm">1 rooms, 1 adults, 0 children</span>
                </div>
              </div>

              {/* Search Button */}
              <div className="md:col-span-2 pl-6">
                <Button
                  onClick={handleSearch}
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-2xl flex items-center justify-center gap-2 text-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/30"
                >
                  <Search className="w-5 h-5" /> Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
