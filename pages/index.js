// pages/index.jsx
import Head from "next/head";
import Layout from "../components/Layout";

import Hero from "../components/Hero";
import Platforms from "../components/Platforms";
import MarketFocus from "../components/MarketFocus";
import ContactForm from "../components/ContactForm";
import Slider from "../components/Slider";
import HeroVideo from "../components/HeroVideo";
import Philosophy from "../components/Philosophy";
import SystemsArchitecture from "../components/SystemsArchitecture";
import TrustBlock from "../components/TrustBlock";
import OperationalScenarios from "../components/OperationalScenarios";
import SecurityGovernance from "../components/SecurityGovernance";
import Trustedby from "../components/TrustedBy";
import OurSystems from "../components/OurSystems";
import ReadMoreLive from "../components/ReadMoreLive";
import PlatformModel from "../components/PlatformModel";
import { Analytics } from "@vercel/analytics/next"


export default function Home() {
  return (
    <Layout isHomePage={true}>
      <Head>
        <title>Nsembe Technologies — Accelerating Intelligence, Empowering Institutions</title>
        <meta
          name="description"
          content="Nsembe Technologies builds offline-first AI platforms for governments, NGOs, schools, and enterprises in Africa and emerging markets. Cliicae, Savara, Mansacore Growth, and School Server OS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Open Graph */}
        <meta property="og:title" content="Nsembe Technologies" />
        <meta property="og:description" content="Accelerating Intelligence, Empowering Institutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nsembe.online" />
        <meta property="og:image" content="https://nsembe.online/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nsembe Technologies" />
        <meta name="twitter:description" content="Accelerating Intelligence, Empowering Institutions." />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical */}
        <link rel="canonical" href="https://nsembe.online" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Nsembe Technologies, offline software, AI platforms, Africa tech, health system, education technology, data collection, NGO software, government software"
        />
      </Head>

      <main className="flex flex-col gap-1">
        <HeroVideo />
        <Trustedby />
        <Philosophy />
        <PlatformModel />
        <Platforms />
        <Slider />
        <Hero />
        <OurSystems />
        <SystemsArchitecture />
        <TrustBlock />
        <MarketFocus />
        <OperationalScenarios />
        <ReadMoreLive />
        <SecurityGovernance />
        <ContactForm />
      </main>
      <Analytics />
    </Layout>
  );
}