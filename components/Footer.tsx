import { footer1, footer2, footer3 } from "@/app/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="maxContainer bg-black-dark h-full text-white-100 flexCenter ">
        <div className="flex py-12 paddingX  w-full text-[11px] tracking-[0.1rem] flexBetween ">
          <div className="flex gap-16 items-start ">
            <div className="flex flex-col gap-y-2">
              <p className="uppercase   hover:cursor-pointer">Shipping info</p>
              <div className="py-6">
                {footer1.map((item) => (
                  <p className="py-2  hover:cursor-pointer">{item}</p>
                ))}
              </div>
              <p className="text-[9px] mt-10 hover:cursor-default">
                2023, Hay Clothing. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col gap-y-2 gap-16">
              <p className="uppercase   hover:cursor-pointer">Shipping info</p>
              <div className="py-6">
                {footer2.map((item) => (
                  <p className="py-2  hover:cursor-pointer">{item}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-2 ">
              <p className="uppercase hover:cursor-pointer">Shipping info</p>
              <div className="py-6">
                {footer3.map((item) => (
                  <p className="py-2 hover:cursor-pointer">{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-[240px]">
            <p className="uppercase gap-y-5  hover:cursor-pointer">
              Exclusive benefits
            </p>
            <div className="flex mt-5">
              <input className="px-7 py-2" placeholder="Enter email here" />
            </div>
            <p className="mt-3 flex flex-wrap ">
              Apply for our free membership to receive exclusive deals, news,
              and events.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-black-dark w-full px-5 ">
        <Image
          src="/message.png"
          alt="launcher"
          width={50}
          height={50}
          className="hover:cursor-pointer"
        />
      </div>
    </>
  );
};

export default Footer;
