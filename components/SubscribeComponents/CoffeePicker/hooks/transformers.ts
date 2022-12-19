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

export const addPrice = (question:QuestionFromServer) => {

    if(question.navName === 'Deliveries') {
        return {
            ...question,
            options: question.options.map(op => ({
                ...op,
                price: null
            }))
        }
    }

    return question;
}