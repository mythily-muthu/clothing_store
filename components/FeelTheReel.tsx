import { Reels } from "@/app/constants";
import Image from "next/image";
import React from "react";

const FeelTheReel = () => {
  return (
    <>
      <p className="heading flexCenter paddingX paddingY maxContainer mt-14">
        Feel the Reel
      </p>
      <div
        className="flexCenter overflow-x-auto  "
        style={{ overflowX: "hidden" }}
      >
        <div className="flex gap-x-3 paddingX paddingY">
          {Reels.map((reel) => {
            return (
              <div className="flex xl:h-[637px] xl:w-[500px]   ">
                <video
                  src={reel.image}
                  width={500}
                  height={637}
                  autoPlay
                  muted
                  loop
                  className="rounded-lg gap-4 object-cover "
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeelTheReel;
