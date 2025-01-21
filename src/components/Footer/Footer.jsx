import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
];

const Footer = () => {
  return (
    <>
      <div className="dark:bg-gray-950 py-6 sm:py-8 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          loading="lazy"
          className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 bg-white/80 backdrop-blur-sm rounded-t-xl shadow-lg">
            {/* Company Info */}
            <div className="py-6 sm:py-8 px-4 flex flex-col items-start">
              <h1 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-primary">
                <img src={FooterLogo} alt="TravelloGo Logo" className="max-h-[60px]" />
              </h1>
              <p className="text-sm mt-3 text-gray-700 dark:text-gray-300 text-left">
                We transform dreams into journeys! Whether it's serene beaches, majestic mountains, or bustling cities, we craft personalized experiences that resonate with your wanderlust.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <FaLocationArrow className="text-lg text-primary transition-all duration-300" />
                <p>Alappuzha, Kerala</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt className="text-lg text-primary transition-all duration-300" />
                <p>+91 8714441230</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="py-6 sm:py-8 px-4 flex flex-col items-start">
              <h1 className="text-xl font-bold mb-4 sm:mb-5 text-left">Connect with Us</h1>
              <div className="flex items-center gap-5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-primary transition-transform transform hover:scale-110 duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-primary transition-transform transform hover:scale-110 duration-300"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-primary transition-transform transform hover:scale-110 duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://wa.me/918714441230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-green-600 hover:text-primary transition-transform transform hover:scale-110 duration-300"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Important Links */}
            <div className="py-6 sm:py-8 px-4 flex flex-col items-start">
              <h1 className="text-xl font-bold mb-3 sm:mb-4 text-left">Important Links</h1>
              <ul className="flex flex-col gap-4">
                {FooterLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary flex items-center gap-2 text-gray-700 dark:text-gray-200"
                  >
                    <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                      <span>&#11162;</span>
                      <span className="transition-all duration-300 hover:text-primary">{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center py-4 sm:py-5 border-t-2 border-gray-300/50 bg-primary text-white">
            <p className="text-sm sm:text-base text-center">
              &copy; 2024 All rights reserved |{" "}
              <span className="hover:text-secondary transition-all duration-300">TravelloGo</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
