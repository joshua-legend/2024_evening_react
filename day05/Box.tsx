// 함수특) 마술상자: 배경색을 넣으면 그 배경색을 입힌 박스만들어줌

type BoxProps = {
  backgroundColor: string;
};

const Box = (props: BoxProps) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid black",
        backgroundColor: props.backgroundColor,
      }}
    ></div>
  );
};

export default Box;
