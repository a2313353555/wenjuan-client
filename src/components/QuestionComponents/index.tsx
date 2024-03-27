import QuestionInput from "@/src/components/QuestionComponents/QuestionInput/QuestionInput";
import QuestionRadio from "@/src/components/QuestionComponents/QuestionRadio/QuestionRadio";
import QuestionTitle from "@/src/components/QuestionComponents/QuestionTitle/QuestionTitle";
import QuestionParagraph from "@/src/components/QuestionComponents/QuestionParagraph/QuestionParagraph";

type ComponentInfoType = {
    fe_id: string
    type: string
    // title: string
    isHidden: string
    props: any
}
export const getComponent = (comp: ComponentInfoType)=>{
    const {fe_id ,type, isHidden, props ={}} = comp
    if(isHidden) return null
    if(type == "questionInput"){
        return  <QuestionInput fe_id={fe_id} props={props}></QuestionInput>
    }
    if(type === "questionRadio"){
        return  <QuestionRadio fe_id={fe_id} props={props}></QuestionRadio>
    }
    if(type === "questionTitle"){
        return  <QuestionTitle {...props}></QuestionTitle>
    }
    if(type === "questionParagraph"){
        return  <QuestionParagraph {...props}></QuestionParagraph>
    }
    return  null
}