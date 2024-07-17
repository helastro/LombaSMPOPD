import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Logo from "../assets/img/logo_diskominfo.png";
import { Link } from "react-router-dom";
import MediaQuery from "../config/MediaQuery";

function Footer() {
  const isMobile = MediaQuery("(max-width: 768px)");

  return (
    <footer className="bg-black h-auto w-full">
      <div className={`container mx-auto p-5 flex ${isMobile ? "flex-col" : "flex-row"} justify-around items-start`}>
        <div className="p-5">
          <ul>
            <div className="flex justify-center">
              <Link to="/">
                <img src={Logo} alt="Logo" className="bg-white cursor-pointer rounded-xl p-4 items-center" />
              </Link>
            </div>
            <div className={`flex ${isMobile ? "flex-col" : "flex-row"} justify-center gap-6 pb-5 m-4`}>
              <a href="tel:0243549446" className="text-2xl text-red-500 cursor-pointer hover:font-semibold flex justify-between" target="_blank" rel="noopener noreferrer">
                <FaPhoneAlt />
                <p className="text-white text-base px-4 items-center">(024)3549446</p>
              </a>
              <a href="diskominfo@semarangkota.go.id" className="text-2xl text-red-500 cursor-pointer hover:font-semibold flex justify-between" target="_blank" rel="noopener noreferrer">
                <MdEmail />
                <p className="text-white text-base px-4 items-center">diskominfo@semarangkota.go.id</p>
              </a>
            </div>
            <a href="https://maps.app.goo.gl/hiSaaV3KiwpcxkeV6" className="text-2xl text-red-500 cursor-pointer hover:font-semibold flex justify-between" target="_blank" rel="noopener noreferrer">
              <FaLocationDot />
              <p className="text-white text-base px-4 items-center">Sekayu, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50132</p>
            </a>
          </ul>
        </div>
      </div>
      <div className="bg-black flex flex-col justify-center items-center text-center p-5">
        <p className="text-white">
          © 2024
          <span className="cursor-pointer hover:text-red-900 text-red-500 font-bold"> Diskominfo Kota Semarang</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
