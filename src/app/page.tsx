import BrandsSection from "@/components/brand";
import CTASection from "@/components/cta-how";
import IntroSection from "@/components/intro";
import WhySection from "@/components/why";

export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <BrandsSection />
      <WhySection />
      <CTASection />
    </main>
  );
}
