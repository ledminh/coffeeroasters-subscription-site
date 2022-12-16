import { QuestionDataType } from "./useData";

export default function reducer (state:stateType, action:actionType) {
    switch(action.type) {
        case "SET_STATUS":

            return state.map((question) => {
                if(question.navName === action.navName) {
                    
                    return {
                        ...question,
                        status: action.status
                    } 
                }           
                return question;    
            })
            break;
        case "SET_SELECTED_OPTION":
            return state.map((question) => {
                if(question.question === action.question) {
                    return {
                        ...question,
                        selectedOption: action.option
                    }
                }
                return question;
            })

        default:
            return state;
    }

}


/***********************
 * Types
 */
type stateType = QuestionDataType[];    

export type navNameType = 'Preferences' | 'Bean Type' | 'Quantity' | 'Grind Option' | 'Deliveries';

export type questionType = 'How do you drink your coffee?' | 'What type of coffee?' | 'How much would you like?' | 'Want us to grind them?' | 'How often should we deliver?';

type actionType = {
    type: "SET_STATUS",
    navName: navNameType,
    status: "opened" | "closed" | "disabled"
} | {
    type: "SET_SELECTED_OPTION",
    option: string | null,
    question: questionType
}
