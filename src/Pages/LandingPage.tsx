import ContactSection from "../components/Home/Contact";
import Features from "../components/Home/Features";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Navbar from "../components/Home/Navbar";
import PortfolioSection from "../components/Home/Portfolio";
import ServicesSection from "../components/Home/Services";
import TestimonialsSection from "../components/Home/Testimonials";


function LandingPage() {
  return (
    <div className="bg-forest">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <ServicesSection/>
      {/* <PortfolioSection/> */}
      <TestimonialsSection/>
      {/* <Pricing /> */}
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default LandingPage;