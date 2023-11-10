import Image from "next/image";
import React from "react";

const navItems = [
  "home",
  "New Arrivals",
  "top wear",
  "bottom weat",
  "lounge wear",
  "track order",
  "sale",
];

const Navbar = () => {
  return (
    <>
      <div className="paddingX paddingY flexBetween">
        <div className="flex w-10 h-10  object-contain hover:cursor-pointer lg:hidden">
          <Image src="menu.svg" alt="menu" width={40} height={40} />
        </div>
        <div className="flex object-contain hover:cursor-pointer ">
          <Image
            src="/logo.webp"
            alt="logo"
            width={50}
            height={40}
            className="md:w-[110px]  lg:h-[100px] object-contain "
          />
        </div>
        <div className="hidden lg:block ">
          <div className="flex gap-10 regular-28 tracking-[0.2rem]  uppercase text-grey-nav text-[13px]">
            {navItems.map((item) => (
              <p className="hover:cursor-pointer hover:underline ">{item}</p>
            ))}
          </div>
        </div>

        <div className="flex hover:cursor-pointer items-center">
          <div className="flex w-10 h-10 object-contain ">
            <Image src="search.svg" alt="search" width={30} height={20} />
          </div>
          <div className="flex w-25 h-6 object-contain">
            <Image src="/cart.png" alt="search" width={25} height={6} />
          </div>
        </div>
      </div>
      {/* <div className="maxContainer border-b"></div> */}
    </>
  );
};

export default Navbar;
