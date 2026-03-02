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
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <ThemeSwitcher />
      <Hero />
      <SectionDivider />
      <Playground />
      <SectionDivider />
      <InstallTabs />
      <SectionDivider />
      <SolNamesShowcase />
      <SectionDivider />
      <WhySolFaces />
      <SectionDivider />
      <ThemeGallery />
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
