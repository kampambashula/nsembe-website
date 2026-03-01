// components/TrustBlock.jsx
export default function TrustBlock() {
  const trustItems = [
    { title: "Offline-first Architecture", desc: "Systems operate reliably without internet." },
    { title: "Sovereign Data Control", desc: "Your data remains secure and locally managed." },
    { title: "Open Standards Integration", desc: "Seamlessly connects with existing systems." },
    { title: "AI-Assisted Decision Support", desc: "Insights powered by predictive analytics." },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="font-display font-800 text-4xl mb-16 text-center text-white">Institutional Trust</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {trustItems.map((item) => (
          <div key={item.title} className="bg-dark-bg-3 p-6 rounded-2xl border border-white/10 hover:shadow-lg transition">
            <h3 className="font-display text-xl text-cyan-400 mb-4">{item.title}</h3>
            <p className="text-white/60">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}