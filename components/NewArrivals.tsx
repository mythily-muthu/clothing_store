import React from "react";
import { Anarkalis } from "@/app/constants";
import Image from "next/image";
import SizeComponent from "./Size";
import Button from "./Button";
const NewArrivals = () => {
  return (
    <>
      <div className="paddingX paddingY maxContainer flex-col flex gap-5 flexCenter">
        <h2 className="heading">For the Bold, Stylish & Confident you</h2>
        <p className="para1">
          Our collection features a range of stylish and versatile outfits
          perfect for any casual occasion. From breezy kurtas to comfy palazzos,
          each piece is crafted with care and attention to detail. We use
          high-quality fabrics that are breathable and easy to care for,
          ensuring that you look and feel your best all day long.
        </p>
      </div>
      <div className="paddingX paddingY maxContainer flex-col flexCenter gap-5">
        <h2 className="heading ">New Arrivals</h2>
        <div className="newarrival">
          {Anarkalis.map((item) => {
            return (
              <div className="flex flex-col gap-y-3">
                <div className="flexCenter w-full lg:w-[325px] lg:h-[528px] ">
                  <Image
                    src={item.image}
                    alt="image"
                    width={325}
                    height={528}
                    className="object-cover "
                  />
                </div>

                <p className="flexStart text-grey-light font-light text-[9px] tracking-[0.1rem] ">
                  HAY!
                </p>
                <h2 className="regular-15">{item.title}</h2>
                <p className="flexStart gap-1">
                  <span className="regular-12 text-xs tracking-wider">Rs</span>{" "}
                  {item.rate}
                  <span className="regular-12 text-xs tracking-wider">.00</span>
                </p>
                <SizeComponent />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
