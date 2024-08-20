// ctrl + w : 영역선택
// ctrl + alt + l : 라인정리
// alt + J : 같은 단어 선택
// Circle 컴포넌트 props 배경색, 크기도 다름, 테두리 색깔도 다름 ㅅㄱ
// Box 컴포넌트 배경색, 크기 다름, radius ㅇㅋ?

import Button from "./Button";
function App() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button backgroundColor="Primary" borderRadius="Hard" />
      <Button backgroundColor="Primary" borderRadius="Smooth" />
      <Button backgroundColor="Primary" borderRadius="Circle" />
    </div>
  );
}

export default App;
