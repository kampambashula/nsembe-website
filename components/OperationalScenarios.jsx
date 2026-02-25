// components/OperationalScenarios.jsx
export default function OperationalScenarios() {
  const scenarios = [
    "Rural Clinic Reporting Delays Reduced by 60%",
    "School Attendance Digitized Across 14 Districts",
    "NGO Field Surveys Synced Across Multiple Regions",
    "Government Dashboards Updated in Real-time"
  ];

  return (
    <section className="py-28 px-6 bg-dark-bg-2 text-center">
      <h2 className="font-display font-800 text-4xl mb-12 text-white">Operational Scenarios</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-white/70 text-lg">
        {scenarios.map((s) => (
          <div key={s} className="bg-dark-bg-3 p-6 rounded-2xl border border-white/10 hover:shadow-lg transition">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}