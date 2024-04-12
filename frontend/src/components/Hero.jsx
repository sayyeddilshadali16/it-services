import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="bold-52 lg:bold-64">
            Transform Your IT Business with Our expert guidance
          </h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            A leading IT service company dedicated to empowering businesses with
            cutting-edge technology solutions with trust and satisfaction.
          </p>

          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <img
                    src="https://camptraveler.com/star.svg"
                    key={index}
                    alt="star"
                    width={24}
                    height={24}
                  />
                ))}
            </div>

            <p className="bold-16 lg:bold-20 text-blue-70">
              198k
              <span className="regular-16 lg:regular-20 ml-1">
                Excellent Reviews
              </span>
            </p>
          </div>

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button
              type="button"
              title="How we work?"
              icon="https://camptraveler.com/play.svg"
              variant="btn_white_text"
            />
          </div>
        </div>
        <div className="relative flex flex-1 items-start">
          <img
            className="rounded-3xl"
            src="https://assets-global.website-files.com/6509176963fe4ef34ed8b7e1/65096a803c25fe26532d8d65_Hero%20Image.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative flex flex-1 items-start">
          <img
            className="rounded-3xl"
            src="https://assets-global.website-files.com/6509176963fe4ef34ed8b7e1/650bb1f8dfef63f3f4b69749_WCU%20Main%20Image.jpg"
            alt=""
          />
        </div>
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="bg-gray-200 w-36 p-2 rounded-full mb-5">
            Why Choose Us
          </h1>
          <h1 className="bold-52 lg:bold-64">
            Proven Expertise in Complex IT Solutions
          </h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            With a track record of successfully tackling intricate IT
            challenges, our seasoned team brings a wealth of experience to the
            table.
          </p>

          <div className="my-11 flex flex-col flex-wrap gap-5">
            <p className="bold-16 flex items-center gap-10 lg:bold-20 text-blue-70">
              Quick Research and Solutions{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </p>
            <p className="bold-16 flex items-center gap-14 lg:bold-20 text-blue-70">
              An Award winning company
              <span>
                <IoIosArrowDown />
              </span>
            </p>
            <p className="bold-16 flex items-center gap-24 lg:bold-20 text-blue-70">
              Dedicated Support 24/7
              <span>
                <IoIosArrowDown />
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col items-center justify-center xl:w-1/2">
          <h1 className="bg-gray-200 w-36 p-2 rounded-full mb-5 text-center">
            Our Testimonials
          </h1>
          <h1 className="bold-52 lg:bold-64">
            Let's check Our happy Clients review
          </h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            We're committed to delivering exceptional IT solutions that drive
            success. Here are some of our client reviews for you to see:
          </p>
        </div>
      </section>
        <Slider/>
    </div>
  );
};

export default Hero;
