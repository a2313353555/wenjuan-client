import {NextApiRequest, NextApiResponse} from "next";

const getAnswerInfo = (reqBody: any) => {
    const answerList: Record<string, any> = []
    Object.keys(reqBody).forEach(key => {
        if (key === 'questionId') return
        answerList.push({
            componentId: key,
            value: reqBody[key]
        })
    })
    return {
        questionId: reqBody.questionId || '',
        answerList: answerList
    }
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(req)
    if (req.method !== 'POST') {
        //不是post请求返回
        res.status(200).json({errno: -1, message: "method 错误"})
    }
    const answerInfo = getAnswerInfo(req.body)
    console.log(answerInfo)
    res.status(200).json({errno: 0})
}