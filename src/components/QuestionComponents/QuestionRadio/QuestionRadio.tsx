import {FC} from "react";
import styles from "./QuestionRadio.module.scss"

type PropsType = {
    fe_id: string,
    props: {
        title: string,
        options: {
            value: string,
            text: string
        }[],
        value: string,
        isVertical: boolean
    }
}

const QuestionRadio: FC<PropsType> = ({fe_id, props}) => {
    const {title, options, value, isVertical} = props
    return (
        <div>
            <p>{title}</p>
            <ul className={styles.list}>
                {options.map(options => {
                    const {value: val, text} = options
                    //判断横向还是竖向
                    let  className= isVertical ? styles.verticalItem : styles.horizontalItem


                    return <li key={val}  className={className}>
                        <label>
                            <input type="radio" name={fe_id} value={val} defaultChecked={value === val}/>
                            {text}
                        </label>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default QuestionRadio