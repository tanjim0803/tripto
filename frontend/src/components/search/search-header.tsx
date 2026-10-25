import React from "react";
import { Map, LayoutGrid, List, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SearchHeader({
  resultsCount,
  location,
  onSortChange
}: {
  resultsCount: number;
  location: string;
  onSortChange: (val: string) => void;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Explore {resultsCount}+ Places in {location}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>Sort by:</span>
          <div className="relative group cursor-pointer">
            <span className="font-medium text-slate-900 flex items-center gap-1">
              Top Reviewed <ChevronDown size={16} />
            </span>
          </div>
        </div>

        <div className="flex items-center border rounded-lg p-1 bg-white">
          <Button variant="ghost" size="icon" className="size-8 rounded-md bg-slate-100">
            <LayoutGrid size={16} />
          </Button>
          <Button variant="ghost" size="icon" className="size-8 rounded-md">
            <List size={16} />
          </Button>
        </div>

        <Button variant="outline" className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-50">
          <Map size={18} />
          Show on Map
        </Button>
      </div>
    </div>
  );
}
