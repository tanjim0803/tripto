import React from "react";
import { SearchHeader } from "@/components/search/search-header";
import { SearchFilters } from "@/components/search/search-filters";
import { HotelList } from "@/components/search/hotel-list";

export default function SearchPage() {
  return (
    <div className="max-w-8xl mx-auto px-6 lg:px-20 py-10">
      <SearchHeader
        resultsCount={300}
        location="Barcelona"
        onSortChange={(val) => console.log(val)}
      />

      <div className="flex flex-col lg:flex-row gap-10">
        <aside className="hidden lg:block">
          <SearchFilters />
        </aside>

        <main className="flex-1">
          <HotelList />
        </main>
      </div>
    </div>
  );
}
