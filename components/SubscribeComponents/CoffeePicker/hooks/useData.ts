import { QuestionFromServer } from "../../../../pages/subscribe"
import { QuestionPropsType } from "../Question"
import { addStatus, addSeclectedOption } from "./transformers"

/**********************************
 *  Types/Interfaces
 */
type QuestionDataType = QuestionFromServer & QuestionPropsType; 

type useDataType = (questionsFromServer:QuestionFromServer[]) => {
    questions: QuestionDataType[]
}


/**********************************
 * Hook
 */
 
const useData: useDataType = (questionsFromServer) => {
    const questions = transform(questionsFromServer, [
        addStatus,
        addSeclectedOption    
    ]);

    console.log(questions);
    
    
    return {
        questions
    }
}


export default useData;









/**********************************
 * Helpers
 */

type transformerType = (question:QuestionFromServer) => QuestionFromServer;
type transformType = (questionsFromServer:QuestionFromServer[], tranformers:transformerType[]) => QuestionDataType[];

const transform:transformType = (questionsFromServer:QuestionFromServer[], tranformers) => {
    return questionsFromServer.map((question) => {
        return tranformers.reduce((q, transformer) => transformer(q), question) as unknown as QuestionDataType;
        
    })
}