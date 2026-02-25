import Layout from "../../components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout isHomePage={false}>
      <div className="bg-dark-bg min-h-screen text-white px-6 py-24 max-w-5xl mx-auto">
        <h1 className="font-display font-800 text-5xl mb-8 text-cyan-400">Privacy Policy</h1>

        <p className="text-white/60 mb-6">
          Nsembe Technologies ("we", "our", "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you access or use our websites, platforms, or services.
        </p>

        <h2 className="font-display font-700 text-2xl mt-8 mb-4">Information We Collect</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-6">
          <li>Personal information you provide, such as name, email, organization, and contact details.</li>
          <li>Data collected automatically through your use of our services, such as usage patterns, device information, and IP addresses.</li>
          <li>Information related to offline and online activity on our platforms (e.g., survey submissions, school records, clinical data) handled securely.</li>
        </ul>

        <h2 className="font-display font-700 text-2xl mt-8 mb-4">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-white/60 space-y-2 mb-6">
          <li>To provide and maintain our services, including offline-first platforms.</li>
          <li>To communicate with you, including demos, updates, or support requests.</li>
          <li>To improve our products through analytics and AI-powered insights.</li>
          <li>To comply with legal obligations and ensure the security of our systems.</li>
        </ul>

        <h2 className="font-display font-700 text-2xl mt-8 mb-4">Data Sharing & Security</h2>
        <p className="text-white/60 mb-6">
          We do not sell your personal data. We may share data with trusted service providers, analytics partners, or government/NGO partners where required for service delivery. All data is stored securely, and we implement reasonable technical and organizational measures to protect your information.
        </p>

        <h2 className="font-display font-700 text-2xl mt-8 mb-4">Your Rights</h2>
        <p className="text-white/60 mb-6">
          You may request access to, correction, or deletion of your personal information. You may also opt out of marketing communications at any time by contacting <a href="mailto:info@nsembe.online" className="text-cyan-400 hover:underline">info@nsembe.online</a>.
        </p>

        <h2 className="font-display font-700 text-2xl mt-8 mb-4">Changes to This Policy</h2>
        <p className="text-white/60 mb-6">
          We may update this Privacy Policy from time to time. The updated version will be posted on our website with the effective date.
        </p>

        <p className="text-white/60 mt-12">
          Effective Date: February 2026
        </p>
      </div>
    </Layout>
  );
}