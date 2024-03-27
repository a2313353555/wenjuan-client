import PageWrapper from "@/src/components/PageWrapper/PageWrapper";
import Head from "next/head";
import styles from './question.module.scss'
import {getComponent} from "@/src/components/QuestionComponents";
import {getQuestionInfo} from "@/src/services/question";

type PropsType = {
    id: string
    errno: number,
    data?: {
        id: string
        title: string
        desc?: string
        js?: string
        css?: string
        isPublished: boolean
        isDeleted: boolean
        componentList: Array<any>
    },
    msg?: string
}
export default function Question(props: PropsType) {
    const {errno, data, msg = ''} = props
    //数据错误
    if (errno !== 0) {
        return <PageWrapper title={"错误"}>
            <div>{msg}</div>
        </PageWrapper>
    }

    const {id, title = '', isDeleted, componentList = []} = data || {}
    if (isDeleted) {
        return <PageWrapper title={"错误"}>
            <div>
                <div>该文件已经被删除</div>
                <div>{msg}</div>
            </div>
        </PageWrapper>
    }
    const ComponentListELem = <>
        {componentList.map(c => {
            const Component = getComponent(c)
            return Component ? <div className={styles.componentWrapper} key={c.fe_id}>
                {Component}
            </div> : null
        })}
    </>

    return <PageWrapper title={title} desc={"questionInfo"}>
        <form method="post" action="/api/answer">
            <input type="hidden" name="questionId" value={props.id}/>
            {ComponentListELem}
            <div className={styles.submitBtnContainer}>
                <button type="submit">提交</button>
            </div>
        </form>
    </PageWrapper>
}


export async function getServerSideProps(context: any) {
    let {id} = context.params
    let result = await getQuestionInfo(id)
    console.log(result,'result')
    return {
        props: {
            id,
            data:result.data,
            errno:result.errno
        }
    }
}