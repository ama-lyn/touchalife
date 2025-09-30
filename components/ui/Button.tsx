import React from "react";
import { Rowdies } from "next/font/google";
import clsx from "clsx";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type ButtonProps = {
  text: string;
  color?: string; // a valid Tailwind color class
  fontSize?: string; // a valid Tailwind font size class
  buttoncolor?: string;
};

const Button = ({
  text,
  color = "text-white",
  fontSize = "text-[12px]",
  buttoncolor = "bg-button hover:bg-sky",
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        rowdies.className,
        color,
        fontSize,
        buttoncolor,
        "rounded-[24px]",
        "border-[1.5px]",
        "border-button",
        "border-solid",
        "p-2",
        "w-auto",
        "font-thin"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
