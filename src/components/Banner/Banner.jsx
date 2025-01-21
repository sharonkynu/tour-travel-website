import React, { useEffect } from "react";
import TravelImg from "../../assets/travelbox.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css"; // Importing AOS styles

const Banner = () => {
  useEffect(() => {
    // Initialize AOS animations with custom settings
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-out-back", // Smooth easing for animations
      once: true, // Make sure animations run only once
    });
  }, []);

  return (
    <>
      <div className="min-h-[650px] bg-gray-100">
        <div className="min-h-[650px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image Section */}
              <div data-aos="zoom-in">
                <img
                  src={TravelImg}
                  alt="Travel Experience"
                  className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                  loading="lazy" // Lazy loading the image
                />
              </div>

              {/* Text Content Section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold text-gray-800"
                >
                  Explore the World with Us
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm sm:text-base text-gray-600 tracking-wide leading-8"
                >
                  Embark on a journey like no other, where adventure meets comfort. From scenic landscapes to luxurious stays, discover it all.
                  <br />
                  Let us take care of every detail, so you can focus on making memories.
                </p>

                <div data-aos="fade-up" className="grid grid-cols-2 gap-6">
                  {/* Service Icons Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <MdFlight className="text-4xl h-12 w-12 shadow-lg p-4 rounded-full bg-violet-100 dark:bg-violet-400 transform hover:scale-110 transition-transform" />
                      <p className="text-gray-700">Flights</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-lg p-4 rounded-full bg-orange-100 dark:bg-orange-400 transform hover:scale-110 transition-transform" />
                      <p className="text-gray-700">Hotels</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <IoIosWifi className="text-4xl h-12 w-12 shadow-lg p-4 rounded-full bg-green-100 dark:bg-green-400 transform hover:scale-110 transition-transform" />
                      <p className="text-gray-700">Wi-Fi</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-lg p-4 rounded-full bg-yellow-100 dark:bg-yellow-400 transform hover:scale-110 transition-transform" />
                      <p className="text-gray-700">Food</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
