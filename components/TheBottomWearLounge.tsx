import { Bottomware } from "@/app/constants";
import Image from "next/image";
import React from "react";

const TheBottomWearLounge = () => {
  return (
    <>
      <Image
        src="/anarkali.webp"
        alt="image"
        width={1600}
        height={900}
        className="mt-20"
      />
      <div className="flexCenter maxContainer gap-5 paddingX paddingY flex-col  mt-14">
        <p className="heading">The Bottomwear Lounge</p>
        <div className="flex paddingY ">
          <div className="grid grid-cols-3 items-center justify-center gap-8">
            {Bottomware.map((item) => {
              return (
                <div className="flexCenter w-full lg:w-[420px] lg:h-[650px] relative ">
                  <Image
                    src={item.image}
                    alt="leggins"
                    width={550}
                    height={340}
                    className="object-cover z-1 brightness-filter brightness-filter:hover "
                  />
                  <p className="absolute z-20 text-white-100 left-8 bottom-8 tracking-wider text-[17px] ">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TheBottomWearLounge;
