import React from "react";

function SizeComponent() {
  const sizes: string[] = ["s", "m", "l", "xl", "xxl"];

  return (
    <div className="flexStart uppercase text-[9px] gap-x-1 lg:text-xs lg:font-light lg:gap-x-2  ">
      {sizes.map((size, index) => (
        <span
          key={index}
          className="border border-black px-[6px] py-[5px] lg:px-[14px] lg:py-[10px] tracking-widest "
        >
          {size}
        </span>
      ))}
    </div>
  );
}

export default SizeComponent;
