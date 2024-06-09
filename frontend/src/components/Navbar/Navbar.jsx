import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const nav = useNavigate();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md shadow-md border-b border-white/20">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-14">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-2 text-white"
          >
            <span className="text-[#939aff]">Intelligent</span>
            <span>Insights</span>
          </a>
          <div className="hidden md:flex space-x-8"></div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/register"
              className="flex items-center text-white hover:text-[#939aff] transition-colors duration-300"
            >
              <button className="px-3 py-1 border-[#fff] border-[1.5px] transition-colors duration-300">
                Register
              </button>
            </a>
            <button
              className="bg-[#3B82F6] text-white px-4 py-2 rounded-lg hover:bg-[#2563EB] transition-colors duration-300"
              onClick={() => nav("login")}
            >
              Login
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`md:hidden bg-white/30 backdrop-blur-md fixed top-20 left-0 right-0 px-6 py-4 space-y-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default Navbar;
