import { heroSection } from "../utils/constants";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex h-[1000px] flex-col items-center bg-hero-cars bg-right bg-no-repeat pl-0 sm:block sm:pl-standard sm:text-secondary">
      <div className="space-y-8 pt-20 sm:pt-standard">
        <h1 className="text-center font-bebas text-7xl sm:text-left">
          {heroSection.heading.split("\n").map((item) => (
            <span key={item}>
              {item}
              <br />
            </span>
          ))}
        </h1>
        <p className="text-center font-roboto-condensed text-white sm:text-left sm:text-inherit">
          {heroSection.description.split("\n").map((item) => (
            <span key={item}>
              {item}
              <br />
            </span>
          ))}
        </p>
      </div>
      <div className="mt-12 flex w-44 flex-col space-x-0 space-y-4 sm:block sm:w-fit sm:space-x-6">
        <Button className="">{heroSection.button1}</Button>
        <Button variant="secondary">{heroSection.button2}</Button>
      </div>
    </section>
  );
};

export default Hero;
