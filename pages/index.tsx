import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Statistics from "@/components/Statistics";
import Features from "@/components/Features";
import Causes from "@/components/Causes";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Mission from "@/components/Mission";
import Volunteer from "@/components/Volunteer";
import FAQs from "@/components/FAQs";
import Charity from "@/components/Charity"
import Footer from "@/components/Footer"

export default function Home() {
  return (
<main>
  <Navbar />
  <Hero />
  
  <Features />
  <Causes />
  <About />
  <Services />
  <Gallery />
  <Mission/>
  <Volunteer/>
  <FAQs/>
  <Charity/>
  <Footer/>

</main>
  );
}