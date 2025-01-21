import React from "react";
import Img1 from "../../assets/places/munnar.jpg";
import Img2 from "../../assets/places/wayanad.jpg";
import Img3 from "../../assets/places/alappuzha.jpg";
import Img4 from "../../assets/places/varkala.jpg";
import Img5 from "../../assets/places/thekkady.jpg";
import Img6 from "../../assets/places/athirappilly.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Munnar",
    location: "Munnar, Kerala",
    description:
      "Munnar, including Vattavada, Kanthaloor, and Suryanelli, is famous for its rolling tea gardens, misty hills, and tranquil lakes, offering a serene retreat.",
    type: "Hill Station Adventure",
  },
  {
    img: Img2,
    title: "Wayanad",
    location: "Wayanad, Kerala",
    description:
      "Wayanad boasts lush green forests, waterfalls, and historical landmarks such as Edakkal Caves. It’s a perfect blend of nature and history.",
    type: "Nature Exploration",
  },
  {
    img: Img3,
    title: "Alappuzha",
    location: "Alappuzha, Kerala",
    description:
      "Known as the 'Venice of the East,' Alappuzha's backwaters and Kuttanad's paddy fields, including Kainakary, offer a quintessential Kerala experience.",
    type: "Backwaters Relaxation",
  },
  {
    img: Img4,
    title: "Varkala",
    location: "Varkala, Kerala",
    description:
      "Varkala is famous for its cliffside beaches, pristine waters, and vibrant cafes, offering a unique mix of adventure and tranquility.",
    type: "Beach Relaxation",
  },
  {
    img: Img5,
    title: "Thekkady",
    location: "Thekkady, Kerala",
    description:
      "Thekkady is home to the Periyar Wildlife Sanctuary, offering boat rides, spice plantations, and a chance to spot exotic wildlife.",
    type: "Wildlife Exploration",
  },
  {
    img: Img6,
    title: "Athirappilly Waterfalls",
    location: "Thrissur, Kerala",
    description:
      "Known as the 'Niagara of India,' Athirappilly Waterfalls is a must-visit for its breathtaking views and serene surroundings.",
    type: "Waterfalls & Nature",
  },
];

const Places = () => {
  const handleWhatsapp = () => {
    window.open(
      "https://wa.me/918714441230?text=Hello,%20I%20am%20interested%20in%20knowing%20more%20about%20the%20places%20to%20visit%20in%20Kerala.",
      "_blank"
    );
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container mx-auto px-4">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to Visit in Kerala
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PlacesData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 max-w-xs mx-auto sm:mx-0"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 space-y-4">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.location}</p>
                <p className="text-sm text-gray-800">{item.description}</p>
                <span className="inline-block text-primary text-xs font-semibold bg-primary/10 rounded-full px-3 py-1 mt-2">
                  {item.type}
                </span>
                <div className="mt-4">
                  <button
                    onClick={handleWhatsapp}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition duration-200"
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Places;
