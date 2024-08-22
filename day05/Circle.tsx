type CircleProps = {
  backgroundColor?: "pink" | "skyblue" | "green";
  width: string;
  height: string;
  border: string;
};

const Circle = (props: CircleProps) => (
  <div
    style={{
      ...props,
      backgroundColor: props.backgroundColor || "skyblue",
      borderRadius: "9999px",
    }}
  ></div>
);

export default Circle;
