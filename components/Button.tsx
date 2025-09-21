// components/Button.tsx
import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
