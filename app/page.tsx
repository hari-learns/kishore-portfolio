import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Affiliations from "@/components/Affiliations";
import ClinicalExperience from "@/components/ClinicalExperience";
import Research from "@/components/Research";
import Leadership from "@/components/Leadership";
import Conferences from "@/components/Conferences";
import Podcast from "@/components/Podcast";
import Journey from "@/components/Journey";
import MedicalEducation from "@/components/MedicalEducation";
import Skills from "@/components/Skills";
import FutureVision from "@/components/FutureVision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactDock from "@/components/ContactDock";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Education />
        <Affiliations />
        <ClinicalExperience />
        <Research />
        <Leadership />
        <Conferences />
        <Podcast />
        <Journey />
        <MedicalEducation />
        <Skills />
        <FutureVision />
        <Contact />
      </main>
      <Footer />
      <ContactDock />
    </div>
  );
}
