import React, { useState } from "react";
import Logo from "../assets/img/logo_diskominfo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar({ className }) {
  let [open, setOpen] = useState(false);

  return (
    <>
      <nav className=" bg-white text-black z-50 relative w-full top-0 left-0 p-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-8 cursor-pointer" />
          </Link>
          <ul className={`md:flex md:items-end md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-12 bg-white" : "top-[-490px] "}`}>
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link to="/">
                <p className={`text-black hover:font-bold duration-500 ${open ? "bg-white py-2 px-4 w-fit rounded-full" : ""}`}>SMP</p>
              </Link>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link to="/Dinas">
                <p className={`text-black hover:font-bold duration-500 ${open ? "bg-white py-2 px-4 w-fit rounded-full" : ""}`}>DINAS</p>
              </Link>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link Link to="/Bagian">
                <p className={`text-black hover:font-bold duration-500 ${open ? "bg-white py-2 px-4 w-fit rounded-full" : ""}`}>BAGIAN</p>
              </Link>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link Link to="/Kecamatan">
                <p className={`text-black hover:font-bold duration-500 ${open ? "bg-white py-2 px-4 w-fit rounded-full" : ""}`}>KECAMATAN</p>
              </Link>
            </li>
          </ul>
          <div onClick={() => setOpen(!open)} className="  cursor-pointer md:hidden">
            {open ? <AiOutlineClose className="h-8 w-8" /> : <AiOutlineMenu className="h-8 w-8" />}
          </div>
        </div>
      </nav>
      <div className={`inset-0 flex flex-col items-center justify-center h-screen absolute z-0 pointer-events-none ${className}`}></div>
    </>
  );
}

export default Navbar;
