import { CSSProperties } from "react"

const Yellowbox = () => {
    const boxStyle:CSSProperties = {
        width:"100px",
        height:"100px",
        backgroundColor:"yellow",
    }
    return <div style={boxStyle}>제부도 깡쏘</div>
}
export default Yellowbox