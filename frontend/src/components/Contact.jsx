import React from "react";

const Contact = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-64">
          Contact us for your any help & needs
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We value your feedback and inquiries. Whether you have questions about
          our services, need assistance, or want to explore potential
          collaborations, we're here to assist you. Please feel free to reach
          out to us via the contact
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <p className="bold-16 lg:bold-20 text-blue-70">Our Address</p>
          <span className="regular-16 lg:regular-20 ml-1">
            20/2, Akar Builders, Opp - Dalal Nursing home, Near Byramji town,
            Sadar, Nagpur.
          </span>
          <p className="bold-16 lg:bold-20 text-blue-70">Call us</p>
          <span className="regular-16 lg:regular-20 ml-1">
            Miss. Pooja Bhosle - 8208970766/7414977373
          </span>
          <p className="bold-16 lg:bold-20 text-blue-70">Our Website</p>
          <span className="regular-16 lg:regular-20 ml-1">
            www.perceptinfosystem.com
          </span>
          <br />
          <p className="bold-16 lg:bold-20 text-blue-70">Email</p>
          <span className="regular-16 lg:regular-20 ml-1">
            hr@perceptinfosystem.com
          </span>
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <img
          className="rounded-3xl"
          src="https://assets-global.website-files.com/6509176963fe4ef34ed8b7e1/6526607c80a71efa52c2d876_Contact%20Image.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Contact;
