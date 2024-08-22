import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

import { CiBellOn } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function App() {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isSub, setIsSub] = useState<boolean>(false);
  const [isCrypted, setIsCrypted] = useState<boolean>(false);

  return (
    <>
      <div onClick={() => setIsLike(!isLike)}>
        {isLike ? <FaHeart /> : <FaRegHeart />}
      </div>
      <div onClick={() => setIsSub(!isSub)}>
        {isSub ? <FaBell /> : <CiBellOn />}
      </div>
      <div onClick={() => setIsCrypted(!isCrypted)}>
        {isCrypted ? (
          <span>
            비밀번호 가리기 <FaEye />
          </span>
        ) : (
          <span>
            비밀번호 보이기 <FaEyeSlash />
          </span>
        )}
      </div>
    </>
  );
}

export default App;
