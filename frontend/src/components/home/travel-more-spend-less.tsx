export default function TravelMoreSpendLess() {
  return (
    <section className="container-main">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Discounts & Savings",
            desc: "Unlock exclusive deals every week.",
          },
          { title: "Flexible Dates", desc: "Easily adjust travel schedules." },
          {
            title: "Earn Rewards",
            desc: "Accumulate points on every booking.",
          },
          {
            title: "24/7 Local Guides",
            desc: "Expert tips on your destination.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-5 border border-primary-100 bg-primary-50/30 rounded-2xl"
          >
            <h6 className="font-semibold text-neutral-800">{item.title}</h6>
            <p className="text-xs text-neutral-500 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
