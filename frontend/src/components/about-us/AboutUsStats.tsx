export default function AboutUsStats() {
  const stats = [
    { label: "Happy Travelers", value: "2M+", icon: "🌍" },
    { label: "Unique Stays", value: "150K+", icon: "🏨" },
    { label: "Countries Covered", value: "120+", icon: "✈️" },
    { label: "Expert Guides", value: "5K+", icon: "⭐" },
  ];

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center flex flex-col items-center gap-3 p-8 bg-white rounded-3xl shadow-sm border border-neutral-100 transition-transform hover:-translate-y-2">
              <span className="text-4xl mb-2">{stat.icon}</span>
              <h3 className="text-4xl font-bold text-neutral-900">{stat.value}</h3>
              <p className="text-neutral-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
