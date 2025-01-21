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
  const [date, setDate] = useState("");
  const whatsappNumber = "9895045133"; // Replace with your WhatsApp Business number

  // Debouncing the price value to avoid frequent updates on slider change
  const debouncedPrice = useDebounce(() => priceValue, 300);

  const handleEnquireNow = useCallback(() => {
    const message = encodeURIComponent(`Hi, I am interested in packages up to ₹${debouncedPrice}. Can you provide more details?`);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
  }, [debouncedPrice, whatsappNumber]);

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm">Our Packages</p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">Search your Destination</label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Kerala"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="date" className="opacity-70">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="price" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">₹{debouncedPrice}</p>
                  </div>
                </label>
                <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="1000"
                    max="200000"
                    value={priceValue}
                    step="1000"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleEnquireNow}
              className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
