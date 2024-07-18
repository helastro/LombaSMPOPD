import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import MediaQuery from "../config/MediaQuery";

function LandingPage() {
  const isMobile = MediaQuery("(max-width: 768px)");

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}

export default LandingPage;
