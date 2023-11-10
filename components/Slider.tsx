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
    <div className="paddingY maxContainer h-[920px] flex mx-auto">
      {slides.map((slide) => (
        <Image
          src={slide}
          alt="sdf"
          width={1600}
          height={750}
          className="object-fill"
        />
      ))}
      {/* <div className="absolute ">
        <Image
          src="/leftarrow.png"
          alt="left"
          width={40}
          height={40}
          className="object-fill "
        />
      </div>
      <div className="absolute ">
        <Image
          src="/righttarrow.png"
          alt="right"
          width={40}
          height={40}
          className="object-fill right-0 top-[50px]"
        />
      </div> */}
    </div>
  );
};

export default Slider;
