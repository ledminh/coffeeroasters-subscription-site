import { useReducer } from "react";
import { QuestionFromServer } from "../../../../pages/subscribe"
import { QuestionPropsType } from "../Question"
import reducer from "./reducer";
import { addStatus, addSeclectedOption } from "./transformers"

import { questionType, navNameType } from "./reducer";

/**********************************
 *  Types/Interfaces
 */
export type QuestionDataType = QuestionFromServer & QuestionPropsType; 

type useDataType = (questionsFromServer:QuestionFromServer[]) => {
    questions: QuestionDataType[],
    toggleQuestion: (navName:navNameType) => void,
    toggleOption: (option:string, question:questionType) => void,
    disableQuestion: (navName:navNameType) => void
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



    
    
    const toggleQuestion = (navName:navNameType) => {
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

    const toggleOption = (option:string, question:questionType) => {
        
        if(state.find((q) => q.question === question)?.selectedOption === option) { //de-select option
            
            if(option === 'Capsule') {
                dispatch({
                    type: "SET_STATUS",
                    navName: "Grind Option",
                    status: "closed"                  
                });
            
            }

            dispatch({
                type: "SET_SELECTED_OPTION",
                option: null,
                question
            })
            return;
        }

        //select option
        if(option === 'Capsule') {
            disableQuestion("Grind Option");
        }
        else if (question === 'How do you drink your coffee?' && state.find(q => q.question === 'How do you drink your coffee?')?.selectedOption === 
        'Capsule'){
            dispatch({
                type: "SET_STATUS",
                navName: "Grind Option",
                status: "closed"                  
            });
        }

        dispatch({
            type: "SET_SELECTED_OPTION",
            option,
            question
        })
    }

    const disableQuestion = (navName:navNameType) => {
        dispatch({
            type: "SET_STATUS",
            navName,
            status: "disabled"
        });
    }

    
    return {
        questions: state,
        toggleQuestion,
        toggleOption,
        disableQuestion
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