import { useRouter } from "next/router";
import ClinicaePlatform from "../../components/platforms/clinicae";
import SavaraPlatform from "../../components/platforms/savara";
import MansacorePlatform from "../../components/platforms/mansacore-growth";
import SchoolServerPlatform from "../../components/platforms/school-server-os";

const platformMap = {
  "mansacore-growth": MansacorePlatform,
  clinicae: ClinicaePlatform,
  savara: SavaraPlatform,
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