// pages/markets/[slug].jsx
import { useRouter } from "next/router";
import GovernmentPlatform from "../../components/platforms/GovernmentPlatform";
import HealthPlatform from "../../components/platforms/HealthPlatform";
import EnterprisePlatform from "../../components/platforms/EnterprisePlatform";
import NGOPlatform from "../../components/platforms/NGOPlatform";
import EducationPlatform from "../../components/platforms/EducationPlatform"


const platformMap = {
  government: GovernmentPlatform,
  health: HealthPlatform,
  enterprise: EnterprisePlatform,
  ngo: NGOPlatform,
  education: EducationPlatform,
 
};

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query; // <-- no :string needed

  if (!slug) return null; // still waiting for router

  const Component = platformMap[slug];

  if (!Component) return <p className="text-white p-8">Platform not found</p>;

  return <Component />;
}