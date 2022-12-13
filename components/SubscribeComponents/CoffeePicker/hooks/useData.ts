import { QuestionFromServer } from "../../../../pages/subscribe"
import { QuestionPropsType } from "../Question"

/**********************************
 *  Types/Interfaces
 */
type useDataType = (questionsFromServer:QuestionFromServer[]) => {
    questions: QuestionPropsType[]
}


/**********************************
 * Hook
 */
 
const useData: useDataType = (questionsFromServer) => {
    const questions = questionsFromServer;
    
    
    
    return {
        questions
    }
}


export default useData;