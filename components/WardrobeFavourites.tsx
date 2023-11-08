import { Wardrobe } from "@/app/constants";
import Image from "next/image";
import React from "react";
import SizeComponent from "./Size";

const WardrobeFavourites = () => {
  return (
    <div className="paddingX paddingY maxContainer flex-col flexCenter gap-5 mb-10">
      <h2 className="heading ">Wardrobe Favourites</h2>
      <div className="newarrival ">
        {Wardrobe.map((dress) => {
          return (
            <div className="flex flex-col gap-y-3">
              <div className="flexCenter w-full lg:w-[325px] lg:h-[528px] ">
                <Image
                  src={dress.image}
                  alt="image"
                  width={325}
                  height={528}
                  className="object-cover "
                />
              </div>

              <p className="flexStart text-grey-light font-light text-[9px] tracking-[0.1rem] ">
                HAY!
              </p>
              <h2 className="regular-15">{dress.title}</h2>
              <p className="flexStart gap-1">
                <span className="regular-12 text-xs tracking-wider">Rs</span>{" "}
                {dress.rate}
                <span className="regular-12 text-xs tracking-wider">.00</span>
              </p>
              <SizeComponent />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WardrobeFavourites;
