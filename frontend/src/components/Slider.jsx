import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Slider = () => {
  const [position, setPosition] = useState(0);
  const handleNext = () => {
    setPosition((prevPosition) => prevPosition + 1);
  };

  const handlePrevious = () => {
    setPosition((prevPosition) => prevPosition - 1);
  };

  return (
    <div className="relative w-full overflow-hidden mb-20">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${position * 100}%)` }}
      >
        <div className="w-full flex-shrink-0 px-20 flex justify-evenly items-center bg-gray-200 rounded-3xl h-96">
          <div className="my-11 flex items-center flex-wrap justify-evenly">
            <div className="relative flex items-center justify-center w-1/2">
              <img
                className="rounded-3xl h-80 w-80"
                src="https://assets-global.website-files.com/6509176963fe4ef34ed8b7e1/650c0923a5169634b7e5cca5_Testimonial%20Person%203.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2">
              <p className="flex items-center gap-10 font-meduim text-blue-70">
                We've partnered with them for several years now, and it's been
                an incredible journey. Their deep knowledge of IT solutions and
                their commitment to excellence have transformed our business.
                Their innovative approach and technical prowess are second to
                none. It's clear that they're dedicated to our success.
              </p>
              <p className="bold-16 mt-10 text-lg lg:bold-20 text-blue-70 ">
                Mark Johnson
              </p>
              <p className="flex items-center gap-10 font-meduim text-blue-70">
                CEO, Xonic Enterprise
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex-shrink-0 px-20 flex justify-evenly items-center bg-gray-200 rounded-3xl h-96">
          <div className="my-11 flex items-center flex-wrap justify-evenly">
            <div className="relative flex items-center justify-center w-1/2">
            <img
                className="rounded-3xl h-80 w-80"
                src="https://assets-global.website-files.com/6509176963fe4ef34ed8b7e1/650bfe8a3d24a43c5fa0146d_Testimonial%20Person%201.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2">
              <p className="flex items-center gap-10 font-meduim text-blue-70">
              I've had the pleasure of working with UBIQ for several years, and I can confidently say they have been instrumental in the success of our business. Their expertise in managing our IT infrastructure, from servers to cybersecurity, has allowed us to focus on our core operations without worrying about technology disruptions.
              </p>
              <p className="bold-16 mt-10 text-lg lg:bold-20 text-blue-70 ">
              Lionel Rodriguez
              </p>
              <p className="flex items-center gap-10 font-meduim text-blue-70">
              CTO, Xova International
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex-shrink-0 px-20 flex justify-evenly items-center bg-gray-200 rounded-3xl h-96">
          <div className="my-11 flex items-center flex-wrap justify-evenly">
            <div className="relative flex items-center justify-center w-1/2">
              <img
                className="rounded-3xl h-80 w-80"
                src="https://assets-global.website-files.com/6509176963fe4ef34ed8b7e1/650c09243596a7ff479f8ce8_Testimonial%20Person%202.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2">
              <p className="flex items-center gap-10 font-meduim text-blue-70">
              The team  has been an integral part of our technological evolution. Their innovative solutions have not only enhanced our operational efficiency but also positioned us as industry leaders. They provide solutions that drive growth. We've seen a noticeable impact on our business, and we look forward to continued success with them.
              </p>
              <p className="bold-16 mt-10 text-lg lg:bold-20 text-blue-70 ">
              Jane Smith
              </p>
              <p className="flex items-center gap-10 font-meduim text-blue-70">
              Manager, Acuvic LTD.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handlePrevious}
        className={`absolute left-10 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full ${
          position === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={position === 0}
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={handleNext}
        className={`absolute right-10 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full ${
          position === 2 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={position === 2}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Slider;
