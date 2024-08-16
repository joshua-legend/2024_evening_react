import { CSSProperties } from "react"

const Greenbox = () => {
    const boxStyle:CSSProperties = {
        width:"100px",
        height:"100px",
        backgroundColor:"green",
    }

    const msg = "집에 가고 싶은 깡소"

    return <div style={boxStyle}>{msg}</div>
}

export default Greenbox;