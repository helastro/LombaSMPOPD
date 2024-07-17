import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MediaQuery from "../config/MediaQuery";

function LandingPage() {
  const isMobile = MediaQuery("(max-width: 768px)");

  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
