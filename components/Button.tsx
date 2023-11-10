import React from "react";

type ButtonProps = { title: "button";  };

const Button = ({ title, customStyles }: ButtonProps) => {
  return (
    <div className={`btn ${customStyles}`}>
      <p>{title}</p>
    </div>
  );
};

export default Button;
