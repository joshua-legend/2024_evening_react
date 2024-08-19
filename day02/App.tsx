// ctrl + w : 영역선택
// ctrl + alt + l : 라인정리
// alt + J : 같은 단어 선택
// Circle 컴포넌트 props 배경색, 크기도 다름, 테두리 색깔도 다름 ㅅㄱ
// Box 컴포넌트 배경색, 크기 다름, radius ㅇㅋ?

import Air from "./Air";

function App() {
  const TwayData = [
    {
      dateProps: { month: "08", date: "19", day: "월" },
      priceProps: { price: 20000 },
    },
    {
      dateProps: { month: "08", date: "20", day: "화" },
      priceProps: { price: 50000 },
    },
    {
      dateProps: { month: "08", date: "21", day: "수" },
      priceProps: { price: 30000 },
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      {TwayData.map((v) => (
        <Air {...v} />
      ))}
    </div>
  );
}

export default App;
