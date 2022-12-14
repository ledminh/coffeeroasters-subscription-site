import { useReducer } from "react";
import { QuestionFromServer } from "../../../../pages/subscribe"
import { QuestionPropsType } from "../Question"
import reducer from "./reducer";
import { addStatus, addSeclectedOption } from "./transformers"

/**********************************
 *  Types/Interfaces
 */
export type QuestionDataType = QuestionFromServer & QuestionPropsType; 

type useDataType = (questionsFromServer:QuestionFromServer[]) => {
    questions: QuestionDataType[],
    toggleQuestion: (navName:string) => void,
}


/**********************************
 * Hook
 */
 
const useData: useDataType = (questionsFromServer) => {
    const questions = transform(questionsFromServer, [
        addStatus,
        addSeclectedOption    
    ]);

    const [state, dispatch] = useReducer(reducer, questions);

    
    
    
    const toggleQuestion = (navName:string) => {
        const currentStatus = state.find((question) => question.navName === navName)?.status;

        if(currentStatus === "opened") {
            dispatch({
                type: "SET_STATUS",
                navName,
                status: "closed"
            })
        } else if(currentStatus === "closed"){
            dispatch({
                type: "SET_STATUS",
                navName,
                status: "opened"
            })
        }
    }

    
    
    return {
        questions: state,
        toggleQuestion
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