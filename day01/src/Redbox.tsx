import { CSSProperties } from "react"

const Redbox = () => {
    const boxStyle:CSSProperties = {
        width:"100px",
        height:"100px",
        backgroundColor:"red",
    }
    return <div style={boxStyle}>아픈신지</div>
}
export default Redbox