import BrandsSection from "@/components/brand";
import CTASection from "@/components/cta-how";
import FAQSection from "@/components/faq";
import HowSection from "@/components/how";
import IntroSection from "@/components/intro";
import SomeDetails from "@/components/some-details";
import WhySection from "@/components/why";
import WhyUsSection from "@/components/why-us";

export default function Home() {
  return (
    <main >
      <IntroSection />
      <BrandsSection />
      <WhySection />
      <CTASection />
      <HowSection />
      <WhyUsSection />
      <SomeDetails />
      <FAQSection />
    </main>
  );
}
