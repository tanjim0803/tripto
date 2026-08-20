import {
  Building,
  Calendar,
  Car,
  MapPin,
  Palmtree,
  Plane,
  Search,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { label: "Select a destination", value: null },
  { label: "Dhaka", value: "dhaka" },
  { label: "Bali", value: "bali" },
  { label: "China", value: "china" },
  { label: "Maldives", value: "maldives" },
  { label: "Singapore", value: "singapore" },
];

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
          {/* Input Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <div className="flex flex-col border-r border-neutral-200 pr-2">
              <span className="text-xs text-neutral-400 font-medium">
                Destination
              </span>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4 text-neutral-400" />
                <Select items={items}>
                  <SelectTrigger className="w-full max-w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col border-r border-neutral-200 pr-4">
              <span className="text-xs text-neutral-400 font-medium">
                Check-in
              </span>
              <div className="flex items-center gap-2 mt-1 relative text-neutral-700 hover:text-neutral-900 transition-colors">
                <Calendar className="w-4 h-4 text-neutral-400 shrink-0 pointer-events-none" />
                <input
                  type="date"
                  className="bg-transparent text-sm font-medium focus:outline-none focus:ring-0 border-none p-0 cursor-pointer text-neutral-800 placeholder:text-neutral-400 w-full"
                />
              </div>
            </div>

            <div className="flex flex-col border-r border-neutral-200 pr-4">
              <span className="text-xs text-neutral-400 font-medium">
                Check-out
              </span>
              <div className="flex items-center gap-2 mt-1 relative text-neutral-700 hover:text-neutral-900 transition-colors">
                <Calendar className="w-4 h-4 text-neutral-400 shrink-0 pointer-events-none" />
                <input
                  type="date"
                  className="bg-transparent text-sm font-medium focus:outline-none focus:ring-0 border-none p-0 cursor-pointer text-neutral-800 placeholder:text-neutral-400 w-full"
                />
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
