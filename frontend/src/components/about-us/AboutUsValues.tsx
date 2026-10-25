import { ShieldCheck, Heart, Zap, Globe2 } from "lucide-react";

export default function AboutUsValues() {
  const values = [
    {
      title: "Trust & Safety",
      description: "Your security is our priority. We rigorously vet every property and partner to ensure a safe experience.",
      icon: <ShieldCheck className="text-primary" size={32} />,
    },
    {
      title: "Passion for Travel",
      description: "We don't just build software; we are travelers ourselves. Every feature is designed by someone who loves to explore.",
      icon: <Heart className="text-primary" size={32} />,
    },
    {
      title: "Seamless Experience",
      description: "From discovery to booking, we eliminate the friction. Travel planning should be as exciting as the trip itself.",
      icon: <Zap className="text-primary" size={32} />,
    },
    {
      title: "Global Perspective",
      description: "We embrace diversity and sustainability, promoting responsible tourism that respects local cultures.",
      icon: <Globe2 className="text-primary" size={32} />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
          The principles that guide everything we do, from the code we write to the
          partnerships we forge.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div key={index} className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-xl transition-all group">
            <div className="mb-6 p-3 bg-white w-fit rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
              {value.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900">{value.title}</h3>
            <p className="text-neutral-600 leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
