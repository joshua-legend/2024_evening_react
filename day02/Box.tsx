type boxProps = {
  backgroundColor: string;
  borderRadius: string;
  width: string;
  height: string;
};

const Box = (props: boxProps) => <div style={{ ...props }}></div>;

export default Box;
