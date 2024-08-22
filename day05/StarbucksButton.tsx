import { CSSProperties } from "react";

type Color = "mainGreen" | "darkGreen" | "grey";
type HexColor = "#4AA366" | "#1D4D4F" | "#DFE4EC";

type StarbucksButtonProps = {
  backgroundColor: Color;
  hasPlus?: boolean;
};

const StarbucksButton = ({
  backgroundColor,
  hasPlus = false,
}: StarbucksButtonProps) => {
  const bgMap: { [key in Color]: HexColor } = {
    mainGreen: "#4AA366",
    grey: "#DFE4EC",
    darkGreen: "#1D4D4F",
  };

  const buttonStyle: CSSProperties = {
    padding: "14px 16px",
    fontSize: "14px",
    border: "none",
    fontWeight: "bold",
    width: "330px",
    backgroundColor: bgMap[backgroundColor],
  };

  return <button style={buttonStyle}>{hasPlus && "+"} Button</button>;
};

export default StarbucksButton;
