import {FC} from "react";
import PageWrapper from "@/src/components/PageWrapper/PageWrapper";


const Fail:FC = ()=>{
    return <PageWrapper title={"提交失败"}>
        <h1>提交失败</h1>
        <p>问卷提交失败</p>
    </PageWrapper>
}
export default  Fail