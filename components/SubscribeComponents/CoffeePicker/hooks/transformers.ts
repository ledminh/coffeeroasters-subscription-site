import { QuestionFromServer } from "../../../../pages/subscribe";

export const addStatus = (question:QuestionFromServer) => {
    

    return {
        ...question,
        status: 'closed'
    };
}

export const addSeclectedOption = (question:QuestionFromServer) => {
    

    return {
        ...question,
        selectedOption: null
    };
};
