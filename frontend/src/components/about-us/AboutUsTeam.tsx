export default function AboutUsTeam() {
  const team = [
    {
      name: "Sarah Jenkins",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    },
    {
      name: "Marcus Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Experience",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "David Kim",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Meet the Visionaries</h2>
      <p className="text-neutral-600 max-w-2xl mx-auto text-lg mb-16">
        A diverse team of technologists, designers, and travel experts working
        together to build the future of exploration.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {team.map((member, index) => (
          <div key={index} className="group">
            <div className="relative aspect-square mb-6 overflow-hidden rounded-full border-4 border-transparent group-hover:border-primary transition-all">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
            <p className="text-neutral-500 font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
