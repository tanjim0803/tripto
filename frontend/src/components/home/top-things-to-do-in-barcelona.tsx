import Image from "next/image";

export default function TopThingsToDoInBarcelona() {
  return (
    <section className="container-main">
      <div className="flex items-center justify-between mb-8">
        <h2>Top Things to Do in Barcelona</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {[
          { name: "Sagrada Familia", img: "/placeholder.svg" },
          { name: "Park Güell", img: "/placeholder.svg" },
          { name: "Casa Batlló", img: "/placeholder.svg" },
          { name: "Gothic Quarter", img: "/placeholder.svg" },
          { name: "Camp Nou", img: "/placeholder.svg" },
          { name: "La Rambla", img: "/placeholder.svg" },
        ].map((thing, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="relative w-full h-36 rounded-xl overflow-hidden mb-2">
              <Image
                src={thing.img}
                alt={thing.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="text-sm font-medium text-neutral-700 text-center">
              {thing.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
