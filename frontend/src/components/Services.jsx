import { FEATURES } from "../constants/index";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <img
            src="https://camptraveler.com/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <h2 className="bold-40 lg:bold-64">Our Services</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature, index) => (
              <div>
                <FeatureItem
                  key={index}
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ title, icon, description }) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-500">
        <img src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
      <Link to="/payment">
        {" "}
        <button className="flex items-center justify-center gap-5 bg-sky-500 text-white py-1 px-3 rounded-full mt-5">
          Purchase Service
          <MdArrowOutward />
        </button>
      </Link>
    </li>
  );
};

export default Services;
