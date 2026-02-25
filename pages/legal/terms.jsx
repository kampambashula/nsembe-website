import Layout from "../../components/Layout";

export default function TermsOfUse() {
  return (
    <Layout isHomePage={false}>
      <div className="bg-dark-bg min-h-screen text-white px-6 py-24 max-w-5xl mx-auto">
        <h1 className="font-display font-800 text-5xl mb-8 text-cyan-400">Terms of Use</h1>

        <p className="text-white/60 mb-6">
          Welcome to Nsembe Technologies ("we", "our", "us"). By accessing or using our platforms, websites, or services, you agree to these Terms of Use. Please read them carefully.
        </p>

        <h2 className="font-display font-700 text-2xl mt-8 mb-4">1. Use of Services</h2>
        <p className="text-white/60 mb-6">
          You may use our services only for lawful purposes and in accordance with these Terms. You agree not to misuse or interfere with our platforms, software, or infrastructure.
        </p>

        <h2 className="font-display font-700 text-2xl mt-8 mb-4">2. Account Responsibility</h2>
        <p className="text-white/60 mb-6">
          Users are responsible for maintaining the confidentiality of account credentials and are responsible for all activity that occurs under their accounts.
        </p>

        <h2 className="font-display font-700 text-2xl mt-8 mb-4">3. Intellectual Property</h2>
        <p className="text-white/60 mb-6">
          All content, software, AI models, platform features, and documentation are owned by Nsembe Technologies and protected by intellectual property laws. You may not reproduce, modify, or distribute our software without permission.
        </p>

        <h2 className="font-display font-700 text-2xl mt-8 mb-4">4. Data & Privacy</h2>
        <p className="text-white/60 mb-6">
          Use of our services is also governed by our <a href="/legal/privacy" className="text-cyan-400 hover:underline">Privacy Policy</a>. You consent to the collection and processing of your data as described there.
        </p>

        <h2 className="font-display font-700 text-2xl mt-8 mb-4">5. Disclaimers</h2>
        <p className="text-white/60 mb-6">
          Our platforms are provided “as is” without warranties of any kind. We do not guarantee uninterrupted service, error-free operation, or the accuracy of AI-generated insights. You use our services at your own risk.
        </p>

        <h2 className="font-display font-700 text-2xl mt-8 mb-4">6. Limitation of Liability</h2>
        <p className="text-white/60 mb-6">
          To the extent permitted by law, Nsembe Technologies shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services.
        </p>

        <h2 className="font-display font-700 text-2xl mt-8 mb-4">7. Termination</h2>
        <p className="text-white/60 mb-6">
          We reserve the right to suspend or terminate accounts or access for violation of these Terms or any applicable laws.
        </p>

        <h2 className="font-display font-700 text-2xl mt-8 mb-4">8. Governing Law</h2>
        <p className="text-white/60 mb-6">
          These Terms are governed by the laws of Zambia. Any disputes arising under these Terms will be subject to the jurisdiction of Zambian courts.
        </p>

        <p className="text-white/60 mt-12">
          Last Updated: February 2026
        </p>
      </div>
    </Layout>
  );
}