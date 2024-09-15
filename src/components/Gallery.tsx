import { useEffect, useState } from "react";
import { gallerySection } from "../utils/constants";
import Slider from "./Slider";
import clsx from "clsx";

export type SliderType = "Samochody osobowe" | "Samochody dostawcze";

const Gallery = () => {
  const [selectedSlider, setSelectedSlider] =
    useState<SliderType>("Samochody osobowe");
  const [selectedGallery, setSelectedGallery] = useState(
    gallerySection.sliders[selectedSlider],
  );
  const galleryTypes = Object.keys(gallerySection.sliders) as SliderType[];

  useEffect(() => {
    setSelectedGallery(gallerySection.sliders[selectedSlider]);
  }, [selectedSlider]);

  return (
    <section
      className="flex flex-col items-center justify-center pb-20 pl-8 sm:block sm:pl-standard"
      id="gallery"
    >
      <div className="space-y-2 text-center sm:text-left">
        <p className="font-roboto-condensed text-xl text-primary">
          {gallerySection.topText}
        </p>
        <h2 className="font-bebas text-4xl text-secondary">
          {gallerySection.heading.toUpperCase()}
        </h2>
      </div>
      <ul className="mt-6 flex flex-col items-center space-x-0 space-y-5 sm:flex-row sm:space-x-12 sm:space-y-0">
        {galleryTypes.map((el) => (
          <li key={el}>
            <button
              onClick={() => setSelectedSlider(() => el)}
              className={clsx(
                "font-roboto-flex",
                selectedSlider === el
                  ? "font-semibold tracking-tight text-primary underline underline-offset-8"
                  : "",
              )}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
      <Slider gallery={selectedGallery} />
    </section>
  );
};

export default Gallery;
