import { QuestionFromServer } from "../../../../pages/subscribe";

export const addIsOpened = (question:QuestionFromServer) => {
    

    return {
        ...question,
        isOpened: false
    };
}

export const addSeclectedOption = (question:QuestionFromServer) => {
    

    return {
        ...question,
        selectedOption: null
    };
};
