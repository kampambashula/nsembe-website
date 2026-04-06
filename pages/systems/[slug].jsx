// pages/systems/[slug].jsx
import { useRouter } from "next/router";
import InsuranceSystem from "../../components/systems/InsuranceManagement";
import FreightOS from "../../components/systems/FreightOS";
import Afrifinance from "../../components/systems/AfriFinance";
import GammaRiskIntelligence from "../../components/systems/gamma-risk-intelligence";
import NsembeAlpha from "../../components/systems/nsembe-alpha";

const systemMap = {
  
  "insurance-mgt-system": InsuranceSystem,
  "freight-os": FreightOS,
  "nsembe-alpha": NsembeAlpha,
  "gamma-risk-intelligence": GammaRiskIntelligence,
};

export default function SystemPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Show nothing while waiting for the router to load
  if (!slug) return null;

  const Component = systemMap[slug];

  // Fallback for unknown slugs
  if (!Component)
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-bg text-white p-8">
        <p className="text-xl text-center">
          System <span className="font-semibold">{slug}</span> not found.
        </p>
      </div>
    );

  return <Component />;
}