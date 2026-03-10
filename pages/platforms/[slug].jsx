import { useRouter } from "next/router";
import ClinicaePlatform from "../../components/platforms/clinicae";
import AssociationManagement from "../../components/platforms/AssociationManagement"
import MansacorePlatform from "../../components/platforms/mansacore-growth";
import SchoolServerPlatform from "../../components/platforms/school-server-os";
import TraditionalLandSystem from "../../components/platforms/traditional-land";
import InsuranceManagement from "../../components/platforms/insurance-management";
import AmakweboMarket from "../../components/platforms/amakwebo-market";
import VillageBanking from "../../components/platforms/VillageBanking";

const platformMap = {
  "mansacore-growth": MansacorePlatform,
  clinicae: ClinicaePlatform,
  "traditional-land": TraditionalLandSystem,
  'insurance-management': InsuranceManagement,
  'amakwebo-market': AmakweboMarket,
  "village-bank": VillageBanking,
  "association-management":AssociationManagement,
  "school-server-os": SchoolServerPlatform,
};

export default function PlatformPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null; // waiting for router

  const Component = platformMap[slug];

  if (!Component) return (
    <p className="text-white p-8">Platform not found</p>
  );

  return <Component />;
}