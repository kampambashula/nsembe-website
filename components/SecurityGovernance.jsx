// components/SecurityGovernance.jsx
export default function SecurityGovernance() {
  const items = [
    "Role-based access controls for all users",
    "End-to-end encryption at rest and in transit",
    "Audit logs and compliance-ready architecture"
  ];

  return (
    <section className="py-6 px-6 text-center">
      <h2 className="font-display font-800 text-4xl mb-12 text-white">Security & Governance</h2>
      <div className="max-w-3xl mx-auto grid gap-6 text-white/60 text-lg">
        {items.map((i) => (
          <div key={i} className="bg-dark-bg-3 p-6 rounded-2xl border border-white/10 hover:shadow-lg transition">
            {i}
          </div>
        ))}
      </div>
    </section>
  );
}