import React from "react";

const About = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase text-7xl font-bold -mt-1 mb-3 text-green-500">
          About Us
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-10 my-20">
          <h2 className="bold-40 lg:bold-34 w-1/2 xl:max-w-[390px]">
            Exclusive Technology to Provide IT Solutions
          </h2>
          <p className="regular-16 w-1/2 text-gray-30 xl:max-w-[520px]">
            With a passion for innovation and a commitment to excellence, we
            redefine possibilities in IT world. Percept Infosystem is a software
            development and IT Training provider and Consultants company based
            in Nagpur offering services in the area of application development,
            web development, Training in IT and Non- IT Languages and
            Outsourcing.
          </p>
        </div>
        <p className="bold-16 text-2xl text-gray-30 xl:max-w-full text-center">
          Advising clients on technology strategy, digital transformation, and
          IT infrastructure planning to help them achieve their business goals.
        </p>
      </div>

      <div className="flexCenter max-container relative mb-20 rounded-5xl overflow-hidden">
        <img
          src="https://assets-global.website-files.com/6509176963fe4ef34ed8b7e1/6513f3fa139c388bcf5286a8_About%20Large%20Image.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
      </div>
    </section>
  );
};

export default About;
