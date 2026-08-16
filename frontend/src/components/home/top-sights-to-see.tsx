import Image from "next/image";

export default function TopSightsToSee() {
  return (
    <section className="container-main">
      <div className="mb-8">
        <h2>Top Sights to See</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Lapland", flag: "🇫🇮", img: "/placeholder.svg" },
          { title: "Ural Mountains", flag: "🇷🇺", img: "/placeholder.svg" },
          { title: "Louvre Museum", flag: "🇫🇷", img: "/placeholder.svg" },
          { title: "Big Ben", flag: "🇬🇧", img: "/placeholder.svg" },
          { title: "Statue of Liberty", flag: "🇺🇸", img: "/placeholder.svg" },
        ].map((sight, idx) => (
          <div
            key={idx}
            className="relative h-56 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={sight.img}
              alt={sight.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
              <span className="text-lg">{sight.flag}</span>
              <h4 className="text-white text-lg font-semibold">
                {sight.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
