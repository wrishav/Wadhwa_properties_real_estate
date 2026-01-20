import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import ServiceAreas from '@/components/ServiceAreas';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Wadhwa Properties Faridabad - Your Trusted Real Estate Partner Since 2001',
  description: 'Wadhwa Properties: The future of real estate in Faridabad. Premium residential & commercial properties with a modern, tech-forward approach.',
  keywords: 'Real Estate Faridabad, Property Dealer Faridabad, Wadhwa Properties, Buy House Faridabad, Rent Flat Faridabad, Commercial Property Faridabad, Satish Wadhwa',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Benefits />
      <ServiceAreas />
      <Testimonials />
      <Contact />
    </>
  );
}
