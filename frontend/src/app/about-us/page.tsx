import AboutUsHero from "@/components/about-us/AboutUsHero";
import AboutUsMission from "@/components/about-us/AboutUsMission";
import AboutUsStats from "@/components/about-us/AboutUsStats";
import AboutUsTeam from "@/components/about-us/AboutUsTeam";
import AboutUsValues from "@/components/about-us/AboutUsValues";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col gap-20 pb-24">
      <AboutUsHero />
      <AboutUsMission />
      <AboutUsStats />
      <AboutUsValues />
      <AboutUsTeam />
    </div>
  );
}
