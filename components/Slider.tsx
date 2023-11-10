"use client";
import Image from "next/image";

const slides = [
  "/sliderimg7.webp",
  "/sliderimg4.webp",
  "/sliderimg5.webp",
  "/sliderimg2.webp",
  "/sliderimg1.webp",
  "/sliderimg3.webp",
  "/sliderimg6.webp",
];

const Slider = () => {
  return (
    <div className="paddingY maxContainer h-[920px] relative flex mx-auto">
      {slides.map((slide) => (
        <Image
          src={slide}
          alt="sdf"
          width={1600}
          height={750}
          className="object-fill"
        />
      ))}
      <div className="absolute ">
        <Image
          src="/leftarrow.svg"
          alt="left"
          width={40}
          height={40}
          className="object-fill left-0 top-[50px]"
        />
      </div>
      <div className="absolute ">
        <Image
          src="/righttarrow.svg"
          alt="right"
          width={50}
          height={50}
          className="object-fill"
        />
      </div>
    </div>
  );
};

export default Slider;
