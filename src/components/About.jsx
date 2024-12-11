import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-200 items-center justify-center gap-4 p-4">
      <div className="flex flex-col w-full md:w-[50%] justify-center items-center gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
          About
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center">
          Nestled in the heart of the serene hills of Mussoorie, The Novello by
          Hotel Evergreen offers a sanctuary of peace and luxury. Our 15
          meticulously designed rooms provide an exquisite retreat for travelers
          seeking comfort and elegance. Whether you're here for a romantic
          getaway, a family vacation, or a business trip, we have the perfect
          accommodation to suit your needs.
        </p>
        <div>
          <Link href="/aboutus">
            <button className="bg-[#9A3D50] hover:bg-[#9A3D50] text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:block m-6">
        <img
          src="./assets/Homepic/Aboutimg.png"
          alt="About"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default About;
