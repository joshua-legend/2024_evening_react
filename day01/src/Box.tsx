import { CSSProperties } from "react"

// 컴포넌트화 시킴
const Box = () => {
    const boxStyle:CSSProperties = {
        width:"100px",
        height:"100px",
        backgroundColor:"yellow"
    }
    return <div style={boxStyle}></div>
}
//다른 파일에 사용하도록 수출하기!
export default Box