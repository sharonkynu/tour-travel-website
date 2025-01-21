import React from "react";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          We are passionate about creating unique and unforgettable travel experiences. Our journey began with the desire to share the beauty of the world with others. We offer personalized travel experiences that cater to your individual preferences, ensuring every trip is exceptional.
          </p>
          <br />
          <p>
          Our team consists of experienced professionals who are dedicated to providing exceptional customer service and attention to detail. We work tirelessly to ensure that your journey is smooth, comfortable, and tailored to your needs. Whether you are looking for a relaxing retreat, an adventurous trek, or a cultural immersion, we are here to make your dream vacation a reality.

          </p>
        </div>
      </div>
      <Location />
    </>
  );
};

export default About;
