import GridBackdrop from '@/components/site/GridBackdrop';
import Nav from '@/components/site/Nav';
import Hero from '@/components/site/Hero';
import WhyWebsite from '@/components/site/WhyWebsite';
import Services from '@/components/site/Services';
import Portfolio from '@/components/site/Portfolio';
import WhyUs from '@/components/site/WhyUs';
import Pricing from '@/components/site/Pricing';
import Process from '@/components/site/Process';
import Faq from '@/components/site/Faq';
import Contact from '@/components/site/Contact';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';



export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <GridBackdrop />
      <Nav />
      <main>
        <Hero />
        <WhyWebsite />
        <Services />
        <Portfolio />
        <WhyUs />
        <Pricing />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}