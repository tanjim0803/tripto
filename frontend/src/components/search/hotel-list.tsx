import React from "react";
import { HotelCard } from "@/components/search/hotel-card";
import { Button } from "@base-ui/react";

const MOCK_HOTELS = [
  {
    name: "Hotel Arts Barcelona",
    location: "Port Olímpic",
    distance: "1.8 km from centre",
    metroDistance: "Metro access",
    rating: "Excellent",
    ratingValue: 5.0,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    type: "Luxury",
    roomType: "Spa View Room",
    roomView: "King Bed",
    roomSize: "40 m²",
    price: "$1,500",
    discount: "10%",
    features: ["Free cancellation", "Spa access", "Breakfast included"],
    badge: "Company Deal",
  },
  {
    name: "W Barcelona",
    location: "Barcelona",
    distance: "2.3 km from centre",
    metroDistance: "Metro access",
    rating: "Excellent",
    ratingValue: 5.0,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    type: "Beach",
    roomType: "Sea View Room",
    roomView: "King Bed",
    roomSize: "35 m²",
    price: "$1,395",
    features: ["Breakfast included", "Spa access"],
    badge: "Best Location",
  },
  {
    name: "Eurostars Grand Marina",
    location: "Port",
    distance: "1.4 km from centre",
    metroDistance: "100 m from beach",
    rating: "Very Good",
    ratingValue: 4.4,
    image:
      "https://images.unsplash.com/photo-1542314831-068bed575257?auto=format&fit=crop&w=800&q=80",
    type: "Harborfront",
    roomType: "Deluxe Room",
    roomView: "King Bed",
    roomSize: "33 m²",
    price: "$1,215",
    discount: "10%",
    features: ["Free cancellation", "Breakfast included"],
    badge: "Best Value",
  },
  {
    name: "Melia Barcelona Sky",
    location: "Polígono",
    distance: "3.5 km from centre",
    metroDistance: "Metro access",
    rating: "Good",
    ratingValue: 3.8,
    image:
      "https://images.unsplash.com/photo-1571896349842-9c941a316429?auto=format&fit=crop&w=800&q=80",
    type: "Spa",
    roomType: "Premium Room",
    roomView: "King Bed",
    roomSize: "32 m²",
    price: "$1,080",
    discount: "10%",
    features: ["Free cancellation", "Spa access"],
    badge: "Best Value",
  },
  {
    name: "SLS Barcelona",
    location: "Port Forum",
    distance: "5.0 km from centre",
    metroDistance: "100 m from beach",
    rating: "Very Good",
    ratingValue: 4.5,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f6?auto=format&fit=crop&w=800&q=80",
    type: "Luxury",
    roomType: "Panoramic Room",
    roomView: "King Bed",
    roomSize: "36 m²",
    price: "$1,440",
    features: ["Breakfast included", "Breakfast included"],
    badge: "Company Deal",
  },
  {
    name: "Majestic Hotel & Spa",
    location: "Passeig de Gracia",
    distance: "500 m from centre",
    metroDistance: "100 m from beach",
    rating: "Very Good",
    ratingValue: 4.5,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    type: "Historic",
    roomType: "Twin Room",
    roomView: "2 Twin Beds",
    roomSize: "32 m²",
    price: "$1,325",
    features: ["Breakfast included", "Triangle room"],
    badge: "Guest Favourite",
  },
  {
    name: "Sofitel Barcelona Superior",
    location: "Front Olímpic",
    distance: "1.6 km from centre",
    metroDistance: "Metro access",
    rating: "Very Good",
    ratingValue: 4.6,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    type: "Beach",
    roomType: "Luxury Room",
    roomView: "King Bed",
    roomSize: "34 m²",
    price: "$1,260",
    features: ["Free cancellation", "Pool access"],
    badge: "Company Deal",
  },
  {
    name: "Renaissance Hotel",
    location: "Polígono",
    distance: "3.2 km from centre",
    metroDistance: "150 m from beach",
    rating: "Good",
    ratingValue: 3.9,
    image:
      "https://images.unsplash.com/photo-157189634984_etc?auto=format&fit=crop&w=800&q=80",
    type: "Sea Side",
    roomType: "Sea View Room",
    roomView: "Queen Bed",
    roomSize: "28 m²",
    price: "$1,025",
    discount: "10%",
    features: ["Free cancellation", "Full sea view"],
    badge: "Company Deal",
  },
];

export function HotelList() {
  return (
    <div className="flex flex-col gap-6">
      {MOCK_HOTELS.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} />
      ))}

      <div className="flex items-center justify-center gap-2 mt-8">
        {[1, 2, 3, "...", 10].map((page, index) => (
          <Button
            key={index}
            variant={page === 1 ? "default" : "outline"}
            className={`size-10 rounded-md ${page === 1 ? "bg-blue-600 text-white" : ""}`}
          >
            {page}
          </Button>
        ))}
      </div>
    </div>
  );
}
