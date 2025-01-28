import React, { useState, useCallback } from "react";

// Utility to debounce functions
const useDebounce = (callback, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(callback);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(callback);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);

  return debouncedValue;
};

const Hero = () => {
  const [priceValue, setPriceValue] = useState(1000);
  const [destination, setDestination] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const whatsappNumber = "9895045133"; // Replace with your WhatsApp Business number

  // Debouncing the price value to avoid frequent updates on slider change
  const debouncedPrice = useDebounce(() => priceValue, 300);

  const handleEnquireNow = useCallback(() => {
    const message = encodeURIComponent(`
      Hi, I am interested in packages up to ₹${debouncedPrice}.
      My desired destination is ${destination}.
      I plan to travel from ${fromDate} to ${toDate}.
      Can you provide more details?
    `);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
  }, [debouncedPrice, destination, fromDate, toDate, whatsappNumber]);

  return (
    <div className="bg-black/20 h-auto sm:h-full flex justify-center items-center pt-24 sm:pt-10 bg-primary/10 max-w-screen-xl mx-auto overflow-hidden">
      <div className="container grid grid-cols-1 gap-4 px-4 sm:px-6">
        <div className="text-white text-center mb-8">
          <p data-aos="fade-up" className="text-sm font-semibold">Our Packages</p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="font-bold text-3xl"
          >
            Search Your Dream Destination
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="space-y-6 bg-white rounded-lg p-6 shadow-lg relative -mt-10" // Slight negative margin to adjust the box upward
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-3">
            <div>
              <label htmlFor="destination" className="opacity-80 text-sm">Destination</label>
              <input
                type="text"
                name="destination"
                id="destination"
                placeholder="E.g. Kerala"
                className="w-full bg-gray-100 my-2 rounded-full p-3 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="from-date" className="opacity-80 text-sm">From Date</label>
              <input
                type="date"
                name="from-date"
                id="from-date"
                className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full p-3 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="to-date" className="opacity-80 text-sm">To Date</label>
              <input
                type="date"
                name="to-date"
                id="to-date"
                className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full p-3 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>

          {/* Max Price Section with interactive slider */}
          <div className="mb-6">
            <label htmlFor="price" className="opacity-80 text-sm">
              <div className="flex justify-between items-center">
                <p>Max Price</p>
                <p className="font-bold text-xl">₹{debouncedPrice}</p>
              </div>
            </label>
            <div className="relative w-3/4 mx-auto">
              {/* Price Slider */}
              <input
                type="range"
                name="price"
                id="price"
                className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2 transition-all ease-in-out"
                min="1000"
                max="200000"
                value={priceValue}
                step="1000"
                onChange={(e) => setPriceValue(e.target.value)}
              />

              {/* Tooltip Display */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 bg-primary text-white p-2 rounded-md text-sm"
                style={{
                  left: `calc(${(priceValue / 200000) * 100}% - 50px)`,
                }}
              >
                ₹{priceValue}
              </div>
            </div>
          </div>

          <button
            onClick={handleEnquireNow}
            className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:shadow-xl mx-auto block"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
