import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export type SliderImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const SliderImage = ({ ...props }: SliderImageProps) => {
  return (
    <img
      {...props}
      className={clsx("w-[300px] sm:h-[446px] sm:w-[600px]", props.className)}
    />
  );
};

export type NavigationDotProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: "active" | "inactive";
  };

export const SliderNavigationDot = ({
  variant,
  ...props
}: NavigationDotProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "h-2 w-2 rounded-full",
        variant === "active" ? "bg-primary" : "bg-[#F1F1F1]",
      )}
      aria-label="Slider navigation dot."
    ></button>
  );
};

export type SliderProps = {
  gallery: string[];
};
const Slider = ({ gallery }: SliderProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [images, setImages] = useState(gallery);
  const autoSliderTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    autoSliderTimer.current = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(autoSliderTimer.current as NodeJS.Timeout);
  }, [images.length]);

  useEffect(() => {
    setImages(gallery);
    setSelectedImage(0);
  }, [gallery]);

  return (
    <div className="flex flex-col items-center">
      <div className="ml-20: mt-20 flex w-full space-x-16 overflow-hidden">
        {images.map((imageUrl) => {
          return (
            <SliderImage
              key={imageUrl}
              src={imageUrl}
              style={{ translate: `-${350 * selectedImage}px` }}
              className="transition-all"
            />
          );
        })}
      </div>
      <div className="mt-12 space-x-5">
        {images.map((imageUrl) => {
          return (
            <SliderNavigationDot
              key={imageUrl}
              onClick={() => setSelectedImage(images.indexOf(imageUrl))}
              variant={
                selectedImage === images.indexOf(imageUrl)
                  ? "active"
                  : "inactive"
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
