import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Playground } from "@/components/Playground";
import { InstallTabs } from "@/components/InstallTabs";
import { SolNamesShowcase } from "@/components/SolNamesShowcase";
import { WhySolFaces } from "@/components/WhySolFaces";
import { ThemeGallery } from "@/components/ThemeGallery";
import { CodeExamples } from "@/components/CodeExamples";
import { AgentIdentity } from "@/components/AgentIdentity";
import { ApiReference } from "@/components/ApiReference";
import { Footer } from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <main id="main">
      <Navbar />
      <Hero />
      <SectionDivider />
      <ErrorBoundary>
        <Playground />
      </ErrorBoundary>
      <SectionDivider />
      <InstallTabs />
      <SectionDivider />
      <SolNamesShowcase />
      <SectionDivider />
      <WhySolFaces />
      <SectionDivider />
      <ErrorBoundary>
        <ThemeGallery />
      </ErrorBoundary>
      <SectionDivider />
      <CodeExamples />
      <SectionDivider />
      <AgentIdentity />
      <SectionDivider />
      <ApiReference />
      <SectionDivider />
      <Footer />
    </main>
  );
}
