import { CSSProperties } from "react";

export type lineType = "Hard" | "Smooth" | "Circle";
export type colorType = "Primary" | "Hover" | "Secondary" | "Deactive";

type ButtonProps = {
  borderRadius: lineType;
  backgroundColor: colorType;
};

const brMap = {
  Hard: "0px",
  Smooth: "5px",
  Circle: "43px",
};

const bgMap = {
  Primary: "#205BF3",
  Hover: "#478DF5",
  Secondary: "transparents",
  Deactive: "#979797",
};

const Button = ({ borderRadius, backgroundColor }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    padding: "10px 45px",
    fontSize: "32px",
    color: "white",
    border: "none",
    borderRadius: brMap[borderRadius],
    backgroundColor: bgMap[backgroundColor],
  };

  return <button style={buttonStyle}>Button</button>;
};

export default Button;
