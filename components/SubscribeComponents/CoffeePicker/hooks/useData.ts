import { useEffect, useReducer } from "react";
import reducer from "./reducer";
import { addStatus, addSeclectedOption, addPrice } from "./transformers"

import { QuestionDataType, QuestionType, pricesType, navNameType } from "../../../../types";


/**********************************
 *  Types/Interfaces
 */
 

type useDataType = (questionsFromServer:QuestionType[], prices: pricesType) => {
    questions: QuestionDataType[],
    toggleQuestion: (questionID:string) => void,
    toggleOption: (optionID:string, questionID:string) => void
}


/**********************************
 * Hook
 */

const useData: useDataType = (questionsFromServer, prices) => {
    const processedQuestions = transform(questionsFromServer, [
        addStatus,
        addSeclectedOption,
        addPrice 
    ]);

    const [questions, dispatch] = useReducer(reducer, processedQuestions);


    useEffect(() => disableGrindWhenCapsuleSelected()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [questions[0].selectedOption]);

    useEffect(() => upadatePriceWhenQuantityChanges(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [questions[2].selectedOption]);



    
    /**********************************
     * Private Methods
     */    

    const upadatePriceWhenQuantityChanges = () => {
        
        const quantityQuestionID = getQuestionID("Quantity");
        if(!quantityQuestionID) return;

        const quantityQuestion = getQuestion(quantityQuestionID);
        if(!quantityQuestion) return;

        if(quantityQuestion.selectedOption === null) return;

        const quantityOption = quantityQuestion.selectedOption.name;

        dispatch({
            type: "SET_PRICES",
            prices: prices[quantityOption as "250g" | "500g" | "1000g"]
        })  
    }


    const disableGrindWhenCapsuleSelected = () => {
        const preferenceQuestionID = getQuestionID("Preferences");
        if(!preferenceQuestionID) return;

        const capsuleOptionID = getOptionIDFromName("Capsule", preferenceQuestionID);
        if(!capsuleOptionID) return;

        const grindQuestionID = getQuestionID("Grind Option");
        if(!grindQuestionID) return;

        if(isSelected(preferenceQuestionID, capsuleOptionID)) {
            disable(grindQuestionID);
        }
        else {
            close(grindQuestionID);
        }

    }


    const getQuestion = (questionID:string) => {
        const question = questions.find((question:QuestionDataType) => question.id === questionID);

        if(!question) return null;

        return question;
    }

    const getQuestionID = (navName:navNameType) => {
        const question = questions.find((question) => question.navName === navName);

        if(!question) return null;

        return question.id;
    }




    const getOption = (optionID:string, questionID:string) => {
        const question = getQuestion(questionID);
        
        if(!question) return null;

        const option = question.options.find((option) => option.id === optionID);

        if(!option) return null;

        return option;
    }
    
    const getOptionIDFromName = (optionName:string, questionID:string) => {
        const question = getQuestion(questionID);

        if(!question) return null;

        const option = question.options.find((option) => option.name === optionName);

        if(!option) return null;

        return option.id;

    }

    


    const close = (questionID:string) => {
        dispatch({
            type: "SET_STATUS",
            questionID: questionID,
            status: "closed"
        });
    }

    const open = (questionID:string) => {
        dispatch({
            type: "SET_STATUS",
            questionID: questionID,
            status: "opened"
        });
    }

    const disable = (questionID:string) => {
        dispatch({
            type: "SET_STATUS",
            questionID: questionID,
            status: "disabled"
        });
    }


    const isSelected = (questionID:string, optionID:string) => {
        const question = getQuestion(questionID);

        if(!question) return false;

        if(question.selectedOption === null) return false;

        return question.selectedOption.id === optionID;
    }


    const selectOption = (questionID:string, optionID:string) => {
        dispatch({
            type: "SET_SELECTED_OPTION",
            questionID: questionID,
            optionID: optionID,
            isSelecting: true
        });
    };

    const deselectOption = (questionID:string) => {
        dispatch({
            type: "SET_SELECTED_OPTION",
            questionID: questionID,
            isSelecting: false
        });
    };


    /**********************************
     * Public Methods
     */
    
    const toggleQuestion = (questionID:string) => {
        const question = getQuestion(questionID);

        if(question === null) return;

        const { status: currentStatus } = question;

        if(currentStatus === "opened") {
            dispatch({
                type: "SET_STATUS",
                questionID: questionID,
                status: "closed"
            })
        } else if(currentStatus === "closed"){
            dispatch({
                type: "SET_STATUS",
                questionID: questionID,
                status: "opened"
            })
        }
    }

    const toggleOption = (optionID:string, questionID:string) => {

        const option = getOption(optionID, questionID);

        if(option === null) return;


        if(isSelected(questionID, optionID)) {
            deselectOption(questionID);
        } else { 
            selectOption(questionID, optionID);            
        }
        
    }

    
    
    return {
        questions,
        toggleQuestion,
        toggleOption,
    }
}

export default useData;


/**********************************
 * Helpers
 */
type transformerType = (question:QuestionType) => QuestionType;
type transformType = (questionsFromServer:QuestionType[], tranformers:transformerType[]) => QuestionDataType[];

const transform:transformType = (questionsFromServer:QuestionType[], tranformers) => {
    return questionsFromServer.map((question) => {
        return tranformers.reduce((q, transformer) => transformer(q), question) as unknown as QuestionDataType;        
    })
}