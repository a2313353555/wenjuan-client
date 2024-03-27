import {CSSProperties, FC} from "react";
import {Props} from "next/script";

type PropsType = {
    text: string
    level: number
    isCenter?: boolean
}

const QuestionTitle:FC<PropsType> = (props:PropsType)=>{
    const {text, level, isCenter} = props
    const style:CSSProperties ={}
    if(isCenter) style.textAlign = 'center'
    if(level===1) return <h1 style={style}>{text}</h1>
    if(level===2) return <h2 style={style}>{text}</h2>
    if(level===3) return <h3 style={style}>{text}</h3>
    if(level===4) return <h4 style={style}>{text}</h4>
}

export default QuestionTitle