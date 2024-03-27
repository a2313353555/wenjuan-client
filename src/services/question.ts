import {get} from './ajax'

export const getQuestionInfo = async (id: string) => {
    return await get('/api/question/' + id)
}