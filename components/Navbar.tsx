import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="paddingX paddingY flexBetween">
      <div className="flex w-10 h-10 object-contain">
        <Image src="menu.svg" alt="menu" width={40} height={40} />
      </div>
      <div className="flex object-contain ">
        <Image
          src="/logo.webp"
          alt="logo"
          width={50}
          height={40}
          className="w-max"
        />
      </div>
      <div className="flex">
        <div className="flex w-10 h-10 object-contain">
          <Image src="search.svg" alt="search" width={30} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
