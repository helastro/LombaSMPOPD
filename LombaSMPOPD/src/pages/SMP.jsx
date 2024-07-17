import Navbar from "../components/Navbar";
import MediaQuery from "../config/MediaQuery";

function LandingPage() {
  const isMobile = MediaQuery("(max-width: 768px)");

  return (
    <div className="overflow-x-hidden">
      <div className="bg-white">
        <Navbar />
      </div>
    </div>
  );
}

export default LandingPage;
