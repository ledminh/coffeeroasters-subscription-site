import { QuestionFromServer } from "../../../../pages/subscribe"
import { QuestionPropsType } from "../Question"
import { addIsOpened, addSeclectedOption } from "./transformers"

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
    const questions = transform(questionsFromServer, [
        addIsOpened,
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
type transformType = (questionsFromServer:QuestionFromServer[], tranformers:transformerType[]) => QuestionPropsType[];

const transform:transformType = (questionsFromServer:QuestionFromServer[], tranformers) => {
    return questionsFromServer.map((question) => {
        return tranformers.reduce((q, transformer) => transformer(q), question) as QuestionPropsType;
        
    })
}