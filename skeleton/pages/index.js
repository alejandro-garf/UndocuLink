import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import JobListings from "../components/JobListings";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section>
        <h2 style={{ textAlign: "center" }}>Featured Opportunities</h2>
        <JobListings />
      </section>
      <Footer />
    </div>
  );
}
