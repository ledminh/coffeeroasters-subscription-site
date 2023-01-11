import { questionType, navNameType } from "../../../../types";

import { QuestionDataType } from "../../../../types";

export default function reducer (state:QuestionDataType[], action:actionType) {
    switch(action.type) {
        case "SET_QUESTIONS":
            return action.questions;
            
        case "SET_STATUS":

            return state.map((question) => {
                if(question.id === action.questionID) {
                    return {
                        ...question,
                        status: action.status
                    } 
                }

                return question;    
            })

        case "SET_SELECTED_OPTION":
            return state.map((question) => {
                if(question.id === action.questionID) {
                    if(!action.isSelecting) {
                        return {
                            ...question,
                            selectedOption: null
                        }
                    }

                    const selectingOption = question.options.find((option) => option.id === action.optionID);
                    
                    if(!selectingOption) return question;

                    return {
                        ...question,
                        selectedOption: selectingOption
                    }
                }

                return question;
            })

        case 'SET_PRICES':
            return state.map((question) => {
                if(question.navName === "Deliveries") {
                    return {
                        ...question,
                        options: question.options.map((option, index) => {
                            return {
                                ...option,
                                price: action.prices[index]
                            }  
                        })
                    }
                    
                }

                return question;
            });


        default:
            return state;
    }

}


/***********************
 * Types
 */
type actionType = {
    type: "SET_STATUS",
    questionID: string,
    status: "opened" | "closed" | "disabled"
} | {
    type: "SET_SELECTED_OPTION",
    optionID: string,
    questionID: string,
    isSelecting: true
} | {
    type: "SET_SELECTED_OPTION",
    questionID: string,
    isSelecting: false
} | {
    type: "SET_PRICES",
    prices: number[]
} | {
    type: "SET_QUESTIONS",
    questions: QuestionDataType[]
}
