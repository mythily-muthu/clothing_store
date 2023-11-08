import React from "react";

function SizeComponent() {
  const sizes: string[] = ["s", "m", "l", "xl", "xxl"];

  return (
    <div className="flexStart uppercase text-[9px] gap-x-1 ">
      {sizes.map((size, index) => (
        <span key={index} className="border border-black px-[6px] py-[5px]">
          {size}
        </span>
      ))}
    </div>
  );
}

export default SizeComponent;
