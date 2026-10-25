import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HotelReviews() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl w-full md:w-64 text-center">
          <div className="text-5xl font-bold text-slate-900">5.0</div>
          <div className="flex text-yellow-400 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-current" />
            ))}
          </div>
          <div className="text-sm text-slate-500">Excellent · 120 reviews</div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Amenities", value: 5.0 },
            { label: "Cleanliness", value: 5.0 },
            { label: "Communication", value: 5.0 },
            { label: "Location", value: 5.0 },
            { label: "Value", value: 5.0 },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-3 border rounded-xl">
              <span className="text-sm text-slate-600">{item.label}</span>
              <span className="text-sm font-bold text-slate-900">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {[
          {
            name: "Ella Park",
            date: "Oct 12, 2023",
            comment: "The hotel is absolutely stunning! The view from the balcony was breathtaking and the staff were incredibly welcoming.",
            rating: 5
          },
          {
            name: "Max Wilson",
            date: "Sep 28, 2023",
            comment: "Great experience. The rooms are spacious and the breakfast selection is amazing. Highly recommend for couples.",
            rating: 5
          }
        ].map((review, i) => (
          <div key={i} className="p-6 border rounded-2xl bg-white">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-slate-200" />
                <div>
                  <div className="font-semibold text-slate-900">{review.name}</div>
                  <div className="text-xs text-slate-400">{review.date}</div>
                </div>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-current" />
                ))}
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      <Button variant="outline" className="w-fit border-blue-600 text-blue-600 hover:bg-blue-50">
        Show All 120 Reviews
      </Button>
    </div>
  );
}
