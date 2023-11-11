import React from "react";

type ButtonProps = { title: "VIEW ALL"; customStyles?: string };

const Button = ({ title, customStyles }: ButtonProps) => {
  return (
    <div className={`btn ${customStyles}`}>
      <p>{title}</p>
    </div>
  );
};

export default Button;
