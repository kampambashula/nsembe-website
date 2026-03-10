// pages/systems/[slug].jsx
import { useRouter } from "next/router";
import VillageBanking from "../../components/systems/VillageBanking";
import InsuranceSystem from "../../components/systems/InsuranceManagement";
import FreightOS from "../../components/systems/FreightOS";
import CouncilLandSystem from "../../components/systems/CouncilLandSystem";
import TraditionalLandSystem from "../../components/systems/TraditionalLandSystem";
import Afrifinance from "../../components/systems/AfriFinance";
import AmakweboMarket from "../../components/systems/AmakweboMarket"; // Amakwebo System

const systemMap = {
  "village-banking-system": VillageBanking,
  "insurance-mgt-system": InsuranceSystem,
  "freight-os": FreightOS,
  "council-land-system": CouncilLandSystem,
  "traditional-land-system": TraditionalLandSystem,
  afrifinance: Afrifinance,
  "amakwebo-market-system": AmakweboMarket,
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