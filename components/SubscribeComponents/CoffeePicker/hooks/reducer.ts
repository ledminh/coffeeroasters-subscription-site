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

        default:
            return state;
    }

}


/***********************
 * Types
 */
type stateType = QuestionDataType[];    

type actionType = {
    type: "SET_STATUS",
    navName: string,
    status: "opened" | "closed"
}
