import { HeroSlider } from '@/components/home/HeroSlider';
import { StatsStrip } from '@/components/home/StatsStrip';
import { AboutSection } from '@/components/home/AboutSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { ServicesStrip } from '@/components/home/ServicesStrip';
import { PartnersCarousel } from '@/components/home/PartnersCarousel';
import { ServiceCategoriesList } from '@/components/home/ServiceCategoriesList';
import { FactsSection } from '@/components/home/FactsSection';
import { PortfolioSection } from '@/components/home/PortfolioSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { LatestNewsSection } from '@/components/home/LatestNewsSection';
import { CtaBanner } from '@/components/home/CtaBanner';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Slider (full width, 3 slides, fade/slide transitions, H1 on two lines, orange Learn More, secondary Telegram, video modal, tags) */}
      <HeroSlider />

      {/* 2. Animated Stats Strip (3 counters: 18000+ MW capacity, 12000+ WTGs, 2450+ customers) */}
      <StatsStrip />

      {/* 3. About ("who we are"): overlapping images, H2 "We are the Best-In-Class Products & Solutions", About link, Download Brochure button */}
      <AboutSection />

      {/* 4. Why Choose Us: H2 "We are Building a Sustainable Future" with 3 icon-boxes */}
      <WhyChooseUsSection />

      {/* 5. Services Strip: 2 image cards (Enhanced Services, Maintenance Services) with text overlay & hover zoom */}
      <ServicesStrip />

      {/* 6. Partners / Logo Carousel: 6 logos, gray by default, color on hover, auto-scrolling */}
      <PartnersCarousel />

      {/* 7. Service Categories List: 3 large numbered rows (01 Wind Turbines, 02 Solar Panels, 03 Hybrid Energy) with hover image reveal */}
      <ServiceCategoriesList />

      {/* 8. Facts Section ("Greener Tomorrow for Everyone"): paragraph + 3 animated progress bars (68%, 85%, 25%) + CTA consultancy bar */}
      <FactsSection />

      {/* 9. Portfolio ("Our Latest Case Studies"): category filter tabs, 12 portrait cards (about 390x495), hover overlay */}
      <PortfolioSection />

      {/* 10. Testimonials: left image, right slider with large quote, client name, role ("Client of Company"), arrows */}
      <TestimonialsSection />

      {/* 11. Latest News: 4 blog cards (840x620 image, category, date, author, title, excerpt, "Read More"), with More link */}
      <LatestNewsSection />

      {/* 12. CTA Banner: "Have Questions? We are Here to Help You!", subtext, big "24/7" badge, "Learn More" button */}
      <CtaBanner />
    </>
  );
}
