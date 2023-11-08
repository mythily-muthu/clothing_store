import React from "react";

type ButtonProps = { title: "button" | "submit"; customStyles: "string" };

const Button = ({ title, customStyles }: ButtonProps) => {
  return (
    <div className={`btn ${customStyles}`}>
      <p>{title}</p>
    </div>
  );
};

export default Button;
