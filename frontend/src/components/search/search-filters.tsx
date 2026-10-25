import React from "react";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export function SearchFilters() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[300px] shrink-0">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Filter by:</h3>
        <Button variant="ghost" className="text-sm text-blue-600 p-0 h-auto hover:bg-transparent">
          Clear
        </Button>
      </div>

      <FilterSection title="Type of Place">
        <div className="flex flex-wrap gap-2">
          {["Any type", "Room", "Entire home"].map((type) => (
            <div key={type} className="flex items-center gap-2 text-sm text-slate-600">
              <Checkbox id={type} />
              <label htmlFor={type} className="cursor-pointer">{type}</label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Price Range">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 border rounded-md px-3 py-2 text-sm text-slate-600">
            $ 300
          </div>
          <div className="flex-1 border rounded-md px-3 py-2 text-sm text-slate-600 text-right">
            $ 1,500+
          </div>
        </div>
        <div className="relative px-2">
          <div className="h-1 bg-slate-200 rounded-full w-full">
            <div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full w-3/4"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full -mt-1.5 cursor-pointer"></div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full -mt-1.5 cursor-pointer"></div>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Rooms and Beds">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Bedrooms</span>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="size-7 px-2">-</Button>
              <span className="font-medium">1</span>
              <Button variant="outline" size="icon" className="size-7 px-2">+</Button>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Beds</span>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="size-7 px-2">-</Button>
              <span className="font-medium">1</span>
              <Button variant="outline" size="icon" className="size-7 px-2">+</Button>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Bathrooms</span>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="size-7 px-2">-</Button>
              <span className="font-medium">Any</span>
              <Button variant="outline" size="icon" className="size-7 px-2">+</Button>
            </div>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Room Size">
        <div className="space-y-2">
          {["Small (≥ 25 m²)", "Medium (26-50 m²)", "Large (≥ 51 m²)"].map((size) => (
            <div key={size} className="flex items-center gap-2 text-sm text-slate-600">
              <Checkbox id={size} />
              <label htmlFor={size} className="cursor-pointer">{size}</label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Distance From Centre">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>1 km</span>
          <span>10+ km</span>
        </div>
        <div className="relative px-2">
          <div className="h-1 bg-slate-200 rounded-full w-full">
            <div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full w-1/3"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full -mt-1.5 cursor-pointer"></div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full -mt-1.5 cursor-pointer"></div>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Guest Review Score">
        <div className="space-y-2">
          {["8.0+ Good", "5.0+ Good", "3.0+ Fair", "2.0+ Poor"].map((score) => (
            <div key={score} className="flex items-center gap-2 text-sm text-slate-600">
              <Checkbox id={score} />
              <label htmlFor={score} className="cursor-pointer">{score}</label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Property Classification">
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2 text-sm text-slate-600">
              <div className="flex items-center gap-1 mr-2">
                {[...Array(star)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
                {[...Array(5 - star)].map((_, i) => (
                  <span key={i} className="text-slate-300">★</span>
                ))}
              </div>
              <Checkbox id={`star-${star}`} />
              <label htmlFor={`star-${star}`} className="cursor-pointer"> {star} star</label>
            </div>
          ))}
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Checkbox id="no-rating" />
            <label htmlFor="no-rating" className="cursor-pointer"> No rating</label>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Amenities">
        <div className="space-y-4">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Popular</div>
          <div className="grid grid-cols-2 gap-2">
            {["Air Conditioning", "BBQ Grill", "Wi-Fi", "Washing machine", "TV", "Kitchen"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <Checkbox id={item} />
                <label htmlFor={item} className="cursor-pointer">{item}</label>
              </div>
            ))}
          </div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Essentials</div>
          <div className="grid grid-cols-2 gap-2">
            {["Radiant Heating", "Iron", "Hair Dryer", "Dedicated Workspace"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <Checkbox id={item} />
                <label htmlFor={item} className="cursor-pointer">{item}</label>
              </div>
            ))}
          </div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">On-site Services</div>
          <div className="grid grid-cols-2 gap-2">
            {["24-hour Front Desk", "Room service", "Luggage Store", "Airport Shuttle"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <Checkbox id={item} />
                <label htmlFor={item} className="cursor-pointer">{item}</label>
              </div>
            ))}
          </div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Features</div>
          <div className="grid grid-cols-2 gap-2">
            {["Breakfast Included", "Pool", "Hot Tub", "Free Parking", "Wellness", "King bed", "Petrol Station", "Family Room", "Bar", "Tea/Coffee maker", "Smoking Allowed", "Indoor Fireplace", "Restaurant"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <Checkbox id={item} />
                <label htmlFor={item} className="cursor-pointer">{item}</label>
              </div>
            ))}
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Location">
        <div className="space-y-2">
          {["Private Beach Area", "Balcony", "Waterfront"].map((size) => (
            <div key={size} className="flex items-center gap-2 text-sm text-slate-600">
              <Checkbox id={size} />
              <label htmlFor={size} className="cursor-pointer">{size}</label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Safety">
        <div className="p-4 bg-slate-50 rounded-lg border border-dashed border-slate-300 text-sm text-slate-500 text-center">
          Coming Soon
        </div>
      </FilterSection>
    </div>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b pb-6 last:border-0">
      <h4 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-1">
        {title} <ChevronDown size={14} className="text-slate-400" />
      </h4>
      <div className="text-slate-600">
        {children}
      </div>
    </div>
  );
}
